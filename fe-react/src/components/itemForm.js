import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import ImageUploader from 'react-images-upload';
import styled from 'styled-components'
import ItemCard from './itemCard'
import { connect } from 'react-redux'
import { addItem } from '../store/actions'
import { useHistory } from 'react-router-dom'
// import { Error } from './signInForm'

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
    outline: none;
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

export const Error = styled.p`

    font-weight: bold;
    color: black;
`


const formSchema = yup.object().shape({
    // name: yup
    // img_url: yup
    //     .string(),
    name: yup
        .string()
        .required("Item name is required"),
    description: yup
        .string()
        .required("Item description is required"),
    location: yup
        .string()
        .required("Item location is required"),
        price: yup
        .number()
        .required("Item price is required")
})
{/* <p> */}
// Form Function

function ItemForm(props) {
    console.log(props)
    const { push } = useHistory()
    const [itemList, setItemList] = useState([]);

    const [formState, setFormState] = useState({
        name: "",
        description: "",
        location: "",
        price: "",
    });
    // itemName

const [buttonDisabled, setButtonDisabled] = useState(true);

useEffect(() => {
    formSchema.isValid(formState).then(valid => {
        setButtonDisabled(!valid);
    });
}, [formState]);

const [errorState, setErrorState] = useState({
        name: "",
        description: "",
        location: "",
        price: "",
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
    e.preventDefault();
    props.addItem(formState)
    push('/protected')
    // axios
    //     .post("https://reqres.in/api/users", formState)
    //     .then(response => {
    //         const apiReturn = response.data
    //         console.log(response.data)
    //         setItemList([...itemList, apiReturn])
    //         setFormState(formState)
    //     })
    //     .catch(err => console.log(err));
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
        <label htmlFor="name">
            
            <Inputs
                type="name"
                name="name"
                id="name"
                value={formState.name}
                onChange={inputChange}
                placeholder="Name"
                />
                {errorState.name.length > 0 ? (
                    <Error>{errorState.name}</Error>
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
                    <Error>{errorState.description}</Error>
                ) : null}
        </label>
        </FormInputs>
        <FormInputs>
        <label htmlFor="location">
         
            <Inputs
                type="location"
                name="location"
                id="location"
                placeholder="Location"
                value={formState.location}
                onChange={inputChange}
            />
            {errorState.location.length < 0 ? (
                    <Error>{errorState.location}</Error>
                ) : null}
        </label>
        </FormInputs>
        <FormInputs>
        <label htmlFor="price">
           
            <Inputs
                type="price"
                name="price"
                id="price"
                placeholder="price"
                value={formState.price}
                onChange={inputChange}
            />
            {errorState.price.length < 0 ? (
                    <Error>{errorState.price}</Error>
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

const mapStateToProps = state => {
    return {
        addItem: state.addItem
    }
}
export default connect(mapStateToProps, { addItem })(ItemForm)
