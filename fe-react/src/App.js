import React from 'react';
import './App.css';
import SignUpForm from './components/signUpForm'
import { Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import ItemList from './components/ItemList'

function App() {
  return (
    <div className="App">
      <Link to="/signUp">Sign Up</Link>
      <Switch>
        <Route exact path="/signUp"><SignUpForm /></Route>
        <PrivateRoute exact path="/protected" component={ItemList} />
      </Switch>
      
    </div>
  );
}

export default App;
