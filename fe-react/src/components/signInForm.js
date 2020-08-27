import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import { login } from '../store/actions'
import { connect } from 'react-redux'
import { ToastsContainer, ToastsStore} from 'react-toasts'

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

export const Error = styled.p`

    font-weight: bold;
    color: black;

`


const formSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, "Invalid Username")
        .required("username is a required field"),
    password: yup
        .string()
        .min(5, "Password must be at least 5 characters")
        .required("Must include a password"),
        email: yup
        .string()
        .email(5, "Invalid Email")
        .required("Must Have Email"),
})

// Form Function

function SignInForm(props) {
    const history = useHistory()
    const [userList, setUserList] = useState([]);

    const [formState, setFormState] = useState({
        username: "",
        password: "",
        email: '',
    });

const [buttonDisabled, setButtonDisabled] = useState(true);

useEffect(() => {
    formSchema.isValid(formState).then(valid => {
        setButtonDisabled(!valid);
    });
}, [formState]);

const [errorState, setErrorState] = useState({
    username: "",
    password: "",
    email: '',
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
    props.login(formState)
    .then((res) => {
        if (res) {
            history.push("/signIn")
           alert("not valid") 
        } else {
            history.push('/protected')
        }
    })
    
};

return (
    <MainDiv>
    <form onSubmit={formSubmit}>
    <FormDiv>
    <Header>
            Sign In
    </Header>
        <FormInputs>
        <label htmlFor="username">
          
            <Inputs
                type="username"
                name="username"
                id="username"
                value={formState.username}
                onChange={inputChange}
                placeholder="Username"
                />
                {errorState.username.length > 0 ? (
                    <Error>{errorState.username}</Error>
                ) : null}
        </label>
        </FormInputs>
        <FormInputs>
        <label htmlFor="email">
          
            <Inputs
                type="email"
                name="email"
                id="email"
                value={formState.email}
                onChange={inputChange}
                placeholder="EMAIL"
                />
                {errorState.email.length > 0 ? (
                    <Error>{errorState.email}</Error>
                ) : null}
        </label>
        </FormInputs>
        <FormInputs>
        <label htmlFor="password">
          
            <Inputs
                type="password"
                name="password"
                id="password"
                placeholder="Password"
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
    </form>
    </MainDiv>
);

};

const mapStateToProps = (state) => {
    return {
        data: state.LoginReducer.data
    }
}

export default connect(mapStateToProps, {login})(SignInForm);
