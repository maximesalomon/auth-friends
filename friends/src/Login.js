import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import axios from "axios";

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

const Login = () => {
  const [error, setError] = useState();
  return (
    <div className="App">
      <h1>Login</h1>
      {error && <Error>{error}</Error>}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          axios
            .post("http://localhost:5000/api/login", data)
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              setError(err.response.data.error)
            });
          setSubmitting(true);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <LoginForm>
              <Field name="email" type="email" placeholder="email"></Field>
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

export default Login;
