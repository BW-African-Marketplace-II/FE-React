import React from 'react';
import './App.css';
import SignUpForm from './components/signUpForm'
import SignInForm from './components/signInForm'
import { Route, Link, Switch, useHistory } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import ItemList from './components/ItemList'
import AddItem from './components/AddItem'
import styled from 'styled-components'
import Cart from './components/Cart'
import UpdateItemForm from './components/UpdateItemForm'
import ItemForm from './components/itemForm'
<<<<<<< HEAD
import {SlideShow} from'./components/SlideShow'
import AwesomeSlider from 'react-awesome-slider';
=======
import ShoppingCart from './components/shoppingCart'
>>>>>>> d5b519182ad3225dda13501369b5312f17226820

function App(props) {
  const history = useHistory()
  return (
<<<<<<< HEAD
   <>
   
<NavBar>   
      <Link to='/protected'><nav>Shop Now</nav></Link>
      <Link to='/signIn'><nav>Sign In</nav></Link>
      <Link to="/login"><nav>Sign Up</nav></Link>
      <Link to="/signIn"> <nav onClick={()=>window.localStorage.removeItem('token')}>Log out</nav></Link>
      <Link to="/cart"><img onClick={() => history.push("/cart") } src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAtS2CaZ1gwZ4DLopHn9hjxlDiuFrquy7E5g&usqp=CAU" /></Link>
      </NavBar>
     <Image>

     </Image>
      
      
      <FullPage>
      {/* <SlideShow/> */}
      <Switch>
        <Route exact path="/login"><SignUpForm /></Route>
        <Route exact path="/signIn"><SignInForm /></Route>
        <Route exact path="/addItem"><ItemForm/></Route>
        <Route exact path="/cart"><Cart/></Route>
        <Route exact path="/updateItem/:id"><UpdateItemForm/></Route>
        <PrivateRoute exact path="/protected" component={ItemList} />
      </Switch>
      

  
    </FullPage>
    </>
=======
    <div className="App">
      {/* <SignUpForm /> */}
      {/* <SignInForm /> */}
      {/* <ItemForm /> */}
      <ShoppingCart />
    </div>
>>>>>>> d5b519182ad3225dda13501369b5312f17226820
  );
}
const Image = styled.div`
background-image: url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
`

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
flex-direction: column;
align-items: center;
margin: 5px;

`
export default App;
