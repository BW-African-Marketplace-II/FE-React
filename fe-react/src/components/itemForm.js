import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import ImageUploader from 'react-images-upload';
import styled from 'styled-components'
import ItemCard from './itemCard'

const MainDiv = styled.div`
    padding-top: 1%;
    padding-bottom: 1%;
    margin-top: 5%;
    margin-left: 30%;
    margin-right: 30%;
    margin-bottom: 5%;
    background: #EA8547;
    border-radius: 30px;
    box-shadow: 0 5px 20px rgba(131, 131, 131, 1);
`

const FormDiv = styled.div`
    width: 90%;
    max-width: 340px;
    margin: 10vh auto;
`

const Header = styled.h1`
    color: #342F2C;
    margin-bottom: 3%;
    text-align: center;
`

const FormInputs = styled.p`
    font-size: $font-size;
    margin-bottom: -10px;
    font-weight: 500;
    color: white;
`

const Inputs = styled.input`
    display: block;
    margin-top: 5%;
    width: 100%;
    height: 1rem;
    padding: 20px;
    font-family: $font-family;
    -webkit-appearance: none;
    border: 0;
    outline: 0;
    transition: 0.3s;
`

const TextInput = styled.textarea`
    display: block;
    width: 100%;
    height: 6rem;
`

const Submit = styled.button`
    display: block;
    width: 100%;
    padding: 20px;
    outline: 0;
    border: 0;
    color: white;
    margin-top: 5%;
    background: #342F2C;
    &: hover {
        box-shadow: 0 0 5px #ffffff,
                    0 0 5px #ffffff,
                    0 0 15px #ffffff,
                    0 0 25px #ffffff;
    } 
`


const formSchema = yup.object().shape({
    // img_url: yup
    //     .string(),
    itemName: yup
        .string()
        .required("Item name is required"),
    description: yup
        .string()
        .required("Item description is required"),
    category: yup
        .string()
        .required("Item category is required")
})

// Form Function

function ItemForm() {

    const [itemList, setItemList] = useState([]);

    const [formState, setFormState] = useState({
        // img_url: "",
        itemName: "",
        description: "",
        category: ""
    });

const [buttonDisabled, setButtonDisabled] = useState(true);

useEffect(() => {
    formSchema.isValid(formState).then(valid => {
        setButtonDisabled(!valid);
    });
}, [formState]);

const [errorState, setErrorState] = useState({
        // img_url:"",
        itemName: "",
        description: "",
        category: ""
});

const validate = e => {
    let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      .reach(formSchema, e.target.name)
      .validate(value)
      .then(valid => {
          setErrorState({
              ...errorState,
              [e.target.name]: ""
          })
      })
      .catch(err => {
          setErrorState({
              ...errorState,
              [e.target.name]: err.errors[0]
          });
      });
};

// onChange function

const inputChange = e => {
    e.persist();
    validate(e);
    let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({...formState, [e.target.name]: value});
};

const formSubmit = e => {
    // e.preventDefault();
    axios
        .post("https://reqres.in/api/users", formState)
        .then(response => {
            const apiReturn = response.data
            console.log(response.data)
            setItemList([...itemList, apiReturn])
            setFormState(formState)
        })
        .catch(err => console.log(err));
};

return (
    <MainDiv>
    <form onSubmit={formSubmit}>
    <FormDiv>
    <Header>
            List Your Item
    </Header>
   
        {/* <FormInputs>
        <label htmlFor="img_url">
            <Inputs
                type="text"
                name="img_url"
                id="img_url"
                value={formState.img_url}
                onChange={inputChange}
            />
        </label>
        </FormInputs> */}
        <FormInputs>
        <label htmlFor="itemName">
            <Inputs
                type="itemName"
                placeholder="Enter the item name"
                name="itemName"
                id="itemName"
                value={formState.itemName}
                onChange={inputChange}
                />
                {errorState.itemName.length > 0 ? (
                    <p className="error">{errorState.itemName}</p>
                ) : null}
        </label>
        </FormInputs>
        <FormInputs>
        <label htmlFor="description">
            <br></br>
            <TextInput
                type="description"
                name="description"
                id="description"
                placeholder="Please provide an item description"
                value={formState.description}
                onChange={inputChange}
            />
            {errorState.description.length < 0 ? (
                    <p className="error">{errorState.description}</p>
                ) : null}
        </label>
        </FormInputs>
        <FormInputs>
        <label htmlFor="category">
            <Inputs
                type="category"
                placeholder="Please choose an item category"
                name="category"
                id="category"
                value={formState.category}
                onChange={inputChange}
            />
            {errorState.category.length < 0 ? (
                    <p className="error">{errorState.category}</p>
                ) : null}
        </label>
        </FormInputs>
            <div className="button-div">
        <Submit disabled={buttonDisabled}>Submit</Submit>
        </div>
    </FormDiv>
    </form>
    <div className="item-card-div">
    <ItemCard items={itemList} />
    </div>
    </MainDiv>
);

};

export default ItemForm;
