import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import ImageUploader from 'react-images-upload';
import styled from 'styled-components'
import ItemCard from './itemCard'


const MainDiv = styled.div`
    
`

const FormDiv = styled.div`
    margin: 0 auto;
    width: 500px;
    height: 500px;
    background: white;
    border-radius: 500px;
    border: 8px solid rgba(245,245,245, 0.5);
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
`

const Header = styled.h1`
    text-align: center;
    margin-top: 70px;
    font-size: 16px;
`

const SubHeader = styled.span`
    
`

const FormInputs = styled.p`
    
`

const Inputs = styled.input`
    
`

const Submit = styled.button`
    
`


const formSchema = yup.object().shape({
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
   
        <FormInputs>
        <label htmlFor="itemName">
            Item Name
            <Inputs
                type="itemName"
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
            Item Description
            <br></br>
            <textarea
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
            Item Category
            <Inputs
                type="category"
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
        <button disabled={buttonDisabled}>Submit</button>
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
