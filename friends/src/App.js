import React from 'react';
import { Route, Link } from "react-router-dom";
import styled from 'styled-components';
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';
import Friends from './Friends';
import Login from './Login';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 400px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: lightgray;
  padding: 20px;
`

const App = () => {
  return (
    <Wrapper>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/login">Login</Link>
      </Nav>
      <Route path="/" exact component={Home}></Route>
      <ProtectedRoute path="/friends" exact component={Friends}></ProtectedRoute>
      <Route path="/login" exact component={Login}></Route>
    </Wrapper>
  );
}

export default App;
