import React from 'react';
import './App.css';
import SignUpForm from './components/signUpForm'
import SignInForm from './components/signInForm'
import { Route, Link, Switch, useHistory } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import ItemList from './components/ItemList'
import Test from './components/Test'
import AddItem from './components/AddItem'
import styled from 'styled-components'
import Cart from './components/Cart'
import UpdateItemForm from './components/UpdateItemForm'
import ItemForm from './components/itemForm'

function App() {
  const history = useHistory()
  return (
   <>
   
<NavBar>   
  {/* <Tabs> */}
      <Link to='/protected'><nav>Shop Now</nav></Link>
      <Link to='/signIn'><nav>Sign In</nav></Link>
      <Link to="/login"><nav>Sign Up</nav></Link>
      <Link to="/signIn"> <nav onClick={()=>window.localStorage.removeItem('token')}>Log out</nav></Link>
      <Link to="/cart"><img onClick={() => history.push("/cart") } src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAtS2CaZ1gwZ4DLopHn9hjxlDiuFrquy7E5g&usqp=CAU" /></Link>
      {/* <Link to='/test'>test</Link> */}
      {/* </Tabs>   */}
      </NavBar>
     
     
      
      <FullPage>
      <Switch>
        <Route exact path="/login"><SignUpForm /></Route>
        <Route exact path="/signIn"><SignInForm /></Route>
        <Route exact path="/test"><Test/></Route>
        <Route exact path="/addItem"><ItemForm/></Route>
        <Route exact path="/cart"><Cart/></Route>
        <Route exact path="/updateItem/:id"><UpdateItemForm/></Route>
        <PrivateRoute exact path="/protected" component={ItemList} />
      </Switch>
      

  
    </FullPage>
    </>
  );
}
const Tabs = styled.div`
background-color: white;
`

const NavBar = styled.div`
display:flex;
align-items: center;
flex-direction: row;
background-color: #EA8547;
color: #342F2C;
justify-content: flex-end;
border-radius: 5px;
margin: 8px;

nav {
margin: 10px;
color: white;
text-decoration: none;
transition: all 500ms ease; 
position: relative;

&:hover {
  -webkit-transform: scale(1.09);
  -ms-transform: scale(1.09);
  transform: scale(1.09);
}
}

img {
  border-left: 1px solid black;
  width: 50px;

  &:hover {
    -webkit-transform: scale(1.09);
    -ms-transform: scale(1.09);
    transform: scale(1.09);
  }
}
`

const FullPage = styled.div`
background-color: #342F2C;
display:flex;
justify-content: center;
align-items: center;
margin: 5px;

`
export default App;
