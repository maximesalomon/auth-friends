import React, { useState } from 'react';
import { Formik, Form, Field} from 'formik';
import axios from 'axios';

const Login = () => {
  return (
    <div className="App">
      <h1>Login</h1>
      <Formik
        initialValues={{ username: '', password: ''}}
        onSubmit={data => {
          console.log('Submit = ', data);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
            <>
                <Form onSubmit={handleSubmit}>
                    <input name='username' type='text' placeholder='username' value={values.username} onChange={handleChange} onBlur={handleBlur}></input>
                    <input name='password' type='password' placeholder='passsword' value={values.password} onChange={handleChange} onBlur={handleBlur}></input>
                    <button>Submit</button>
                </Form>
                <pre>{JSON.stringify(values)}</pre>
            </>
        )}
      </Formik>
    </div>
  );
}

export default Login;
