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


function App() {
  const history = useHistory()
  return (
   <>
<NavBar>     
      <Link to='/protected'><button>list</button></Link>
      <Link to='/signIn'><button>Sign In</button></Link>
      <Link to="/login"><button>Sign Up</button></Link>
      <Link to="/cart"><img onClick={() => history.push("/cart") } src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAtS2CaZ1gwZ4DLopHn9hjxlDiuFrquy7E5g&usqp=CAU" /></Link>
      {/* <Link to='/test'>test</Link> */}
      </NavBar>
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
const NavBar = styled.div`
display:flex;
background-color: #EA8547;
color: #342F2C;
justify-content: flex-end;
border-radius: 5px;

button {
 border: 1px solid white;
  width: 70px;
  height: 50px;
  background-color: white;
text-decoration: underline;
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
}
`

const FullPage = styled.div`
background-color: #342F2C;
display:flex;
justify-content: center;
align-items: center;


`
export default App;
