import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components'
import Anime, {anime} from 'react-anime';


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
    width: 100%;
    padding: 20px;
    font-family: $font-family;
    -webkit-appearance: none;
    border: 0;
    outline: 0;
    transition: 0.3s;
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
    email: yup
        .string()
        .email("Must be a valid email address")
        .required("Email is a required field"),
    password: yup
        .string()
        .min(5, "Password must be at least 5 characters")
        .required("Must include a password"),
})

// Form Function

function SignInForm() {

    const [userList, setUserList] = useState([]);

    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });

const [buttonDisabled, setButtonDisabled] = useState(true);

useEffect(() => {
    formSchema.isValid(formState).then(valid => {
        setButtonDisabled(!valid);
    });
}, [formState]);

const [errorState, setErrorState] = useState({
    email: "",
    password: ""
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
            setUserList([...userList, apiReturn])
            setFormState(formState)
        })
        .catch(err => console.log(err));
};

return (
    
    <MainDiv>
    <form onSubmit={formSubmit}>
        {/* STRETCH - ANIME */}

    {/* <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 600}> */}
    
    {/* END STRETCH */}
    <FormDiv>
    <Header>
            Sign In
    </Header>
        <FormInputs>
        <label htmlFor="email">
            <Inputs
                type="email"
                placeholder="Please enter your email"
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
        <label htmlFor="password">
            <Inputs
                type="password"
                placeholder="Please enter your password"
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
            <div className="button-div">
        <Submit disabled={buttonDisabled}>Submit</Submit>
        </div>
    </FormDiv>
    {/* </Anime> */}
    </form>
    </MainDiv>
);

};

export default SignInForm;
