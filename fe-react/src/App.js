import React from 'react';
import './App.css';
import { BrowserRouter as Route, Link, Switch } from 'react-router-dom'
import SignUpForm from './components/signUpForm'
import SignInForm from './components/signInForm'
import ItemForm from './components/itemForm'
import ShoppingCart from './components/shoppingCart'

function App() {
  return (
    <div className="App">
      {/* <SignUpForm /> */}
      {/* <SignInForm /> */}
      {/* <ItemForm /> */}
      <ShoppingCart />
    </div>
  );
}

export default App;
