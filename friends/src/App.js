import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import { getToken } from './utils/api' 
import styled from "styled-components";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import Friends from "./Friends";
import Login from "./Login";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    setLoggedIn(getToken())
  }, [])
  return (
    <Wrapper>
      <Nav>
        <Link to="/">Home</Link>
        { loggedIn &&
          <>
            <Link to="/friends">Friends</Link>
            <Link onClick={() => {localStorage.removeItem("token"); setLoggedIn(false)}}>Logout</Link>
          </>
        }
        { !loggedIn && <Link to="/login">Login</Link> }
      </Nav>
      <Route path="/" exact component={Home}></Route>
      <ProtectedRoute
        path="/friends"
        exact
        component={Friends}
      ></ProtectedRoute>
      
      <Route path="/login" exact component={Login}></Route>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  width: 400px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: lightgray;
  padding: 20px;
`;

export default App;
