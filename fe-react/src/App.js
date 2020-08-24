import React from 'react';
import './App.css';
import { BrowserRouter as Route, Link, Switch } from 'react-router-dom'
import SignUpForm from './components/signUpForm'
import SignInForm from './components/signInForm'

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-links">
          {/* <Link to="/">Home</Link> */}
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      <Switch>
         {/* <Route exact path="/"></Route> */}
         <Route path="/register">
           <SignUpForm />
         </Route>
         <Route path="/login">
           <SignInForm />
         </Route>
      </Switch>
    </div>
  );
}

export default App;
