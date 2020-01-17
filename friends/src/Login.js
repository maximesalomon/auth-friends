import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

const Login = () => {
  return (
    <div className="App">
      <h1>Login</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // make async call
          console.log("Submit = ", data);
          setSubmitting(true);
        }}
      >
        {({ values, isSubmitting }) => (
          <>
            <Form>
              <Field name="username" type="input"></Field>
              <Field name="password" type="password"></Field>
              <button disabled={isSubmitting}>Submit</button>
            </Form>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Login;
