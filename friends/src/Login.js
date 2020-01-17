import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import api from "./utils/api";

const Login = props => {
  const [error, setError] = useState();
  return (
    <div className="App">
      <h1>Login</h1>
      {error && <Error>{error}</Error>}
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          api()
            .post("/login", data)
            .then(res => {
              console.log(res);
              localStorage.setItem("token", res.data.payload);
              props.history.push("/friends");
            })
            .catch(err => {
              setError(err.response.data.error);
            });
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <LoginForm>
              <Field name="username" type="text" placeholder="username"></Field>
              <Field
                name="password"
                type="password"
                placeholder="password"
              ></Field>
              <FormButton disabled={isSubmitting}>Submit</FormButton>
            </LoginForm>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const LoginForm = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const FormButton = styled.button`
  margin: 20px auto;
  padding: 14px;
  width: 40%;
  background-color: white;
  border: solid blue 1px;
  border-radius: 4px;
  :hover {
    background-color: blue;
    color: white;
  }
`;

const Error = styled.p`
  color: red;
`;

export default withRouter(Login);
