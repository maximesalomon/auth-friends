import React, { useState } from 'react';
import { Route, Link } from "react-router-dom";
import axios from 'axios';
import Home from './Home';
import Friends from './Friends';
import Login from './Login';

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Route path="/" exact component={Home}></Route>
      <Route path="/friends" exact component={Friends}></Route>
      <Route path="/login" exact component={Login}></Route>
    </div>
  );
}

export default App;
