import React from 'react';
import './App.css';
import SignUpForm from './components/signUpForm'
import { Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import ItemList from './components/ItemList'

function App() {
  return (
    <div className="App">
      <Link to="/login">Sign Up</Link>
      <Link to='/protected'>list</Link>
      <Switch>
        <Route exact path="/login"><SignUpForm /></Route>
        <PrivateRoute exact path="/protected" component={ItemList} />
      </Switch>
      
    </div>
  );
}

export default App;
