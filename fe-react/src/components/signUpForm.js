import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth'


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
    margin:0 0 50px 0;
    padding:10px;
    text-align:center;
    font-size:30px;
    color:darken(#e5e5e5, 50%);
    border-bottom:solid 1px #e5e5e5;
`

const SubHeader = styled.span`
    display:block;
    background: #F9A5A5;
    padding: 2px 5px;
    color: #666;
`

const FormInputs = styled.p`
    margin: 0 0 3em 0;
    position: relative;
`

const Inputs = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;
    outline: none;
    margin:0;
`

const Submit = styled.button`
    background: $button;
    box-shadow: 0 3px 0 0
`

// Validation Using Yup

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is a required field"),
    email: yup
        .string()
        .email("Must be a valid email address")
        .required("Email is a required field"),
    location: yup
        .string()
        .required("Location is a required field"),
    password: yup
        .string()
        .min(5, "Password must be at least 5 characters")
        .required("Must include a password"),
    terms: yup
        .boolean()
        .oneOf([true], "Please agree to the Terms of Service")
        .required("You must accept the Terms of Service")
})

// Form Function

function SignUpForm() {
    const history = useHistory()
    const [userList, setUserList] = useState([]);

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        location: "",
        password: "",
        terms: false
    });

const [buttonDisabled, setButtonDisabled] = useState(true);

useEffect(() => {
    formSchema.isValid(formState).then(valid => {
        setButtonDisabled(!valid);
    });
}, [formState]);

const [errorState, setErrorState] = useState({
    name: "",
    email: "",
    location: "",
    password: "",
    terms: ""
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
    console.log('submitted')
    axiosWithAuth()
        .post("/friends", formState)
        .then(response => {
            console.log(response)
            window.localStorage.setItem('token', response.data.payload)
            history.push('/protected')
            // const apiReturn = response.data
            // console.log(response.data)
            // setUserList([...userList, apiReturn])
            // setFormState(formState)
        })
        .catch(err => console.log(err));
};

return (
    <MainDiv>
    <form onSubmit={formSubmit}>
    <FormDiv>
    <Header>
            Create an Account
    </Header>
        <FormInputs>
        <label htmlFor="name">
            Name
            <Inputs
                type="text"
                name="name"
                id="name"
                value={formState.name}
                onChange={inputChange}
                />
                {errorState.name.length > 0 ? (
                    <p className="error">{errorState.name}</p>
                ) : null}
        </label>
        </FormInputs>
        <FormInputs>
        <label htmlFor="email">
            Email
            <Inputs
                type="email"
                name="email"
                id="email"
                value={formState.email}
                onChange={inputChange}
                />
                {errorState.email.length > 0 ? (
                    <p className="error">{errorState.email}</p>
                ) : null}
        </label>
        </FormInputs>
        <FormInputs>
        <label htmlFor="location">
            Location
            <Inputs
                type="text"
                name="location"
                id="location"
                value={formState.location}
                onChange={inputChange}
                />
                {errorState.location.length > 0 ? (
                    <p className="error">{errorState.location}</p>
                ) : null}
        </label>
        </FormInputs>
        <FormInputs>
        <label htmlFor="password">
            Password
            <Inputs
                type="password"
                name="password"
                id="password"
                value={formState.password}
                onChange={inputChange}
            />
            {errorState.password.length < 0 ? (
                    <p className="error">{errorState.password}</p>
                ) : null}
        </label>
        </FormInputs>
        <FormInputs>
        <label htmlFor="terms">
                <Inputs
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formState.terms}
                    onChange={inputChange}
                />
                {errorState.terms.length > 0 ? (
                    <p className="error">{errorState.terms}</p>
                ) : null}
                I agree to the Terms of Service
            </label>
            </FormInputs>
            <div className="button-div">
        <button disabled={buttonDisabled}>Submit</button>
        </div>
    </FormDiv>
    </form>
    </MainDiv>
);

};

export default SignUpForm;
