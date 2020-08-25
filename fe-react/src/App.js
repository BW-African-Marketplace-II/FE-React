import React from 'react';
import './App.css';
import SignUpForm from './components/signUpForm'
import SignInForm from './components/signInForm'
import { Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import ItemList from './components/ItemList'
import Test from './components/Test'
import AddItem from './components/AddItem'
import styled from 'styled-components'
import Cart from './components/Cart'



function App() {
  return (
   <>
{/* <NavBar> */}
      <Link to="/login">Sign Up</Link>
      <Link to='/protected'>list</Link>
      <Link to='/signIn'>Sign In</Link>
      <Link to="/cart">Cart</Link>
      {/* <Link to='/test'>test</Link> */}
      {/* </NavBar> */}
      <FullPage>
      <Switch>
        <Route exact path="/login"><SignUpForm /></Route>
        <Route exact path="/signIn"><SignInForm /></Route>
        <Route exact path="/test"><Test/></Route>
        <Route exact path="/addItem"><AddItem/></Route>
        <Route exact path="/cart"><Cart/></Route>
        <PrivateRoute exact path="/protected" component={ItemList} />
      </Switch>
      

  
    </FullPage>
    </>
  );
}
// const NavBar = styled.div`
// display:flex;
// `

const FullPage = styled.div`
background-color: #342F2C;
display:flex;
justify-content: center;
align-items: center;


`
export default App;
