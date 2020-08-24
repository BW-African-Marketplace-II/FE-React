import React from 'react';
import './App.css';
import { BrowserRouter as Route, Link, Switch } from 'react-router-dom'
import SignUpForm from './components/signUpForm'
import SignInForm from './components/signInForm'

function App() {
  return (
    <div className="App">
      <SignUpForm />
      <SignInForm />
    </div>
  );
}

export default App;
