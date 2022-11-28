import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import './signUp.scss';

interface Values {
  email: string;
  password: string;
}

const SignUp = () => {
  const [login, setLogin] = useState(false);

  const loginChange = () => {
    setLogin((prevState) => !prevState);
  };

  return (
    <div className="signup">
      <div className="signup-header">
        Already have an account?
        <span className="signup-header__login" onClick={loginChange}>
          Log In
        </span>
      </div>
      <div className="signup-form">
        <h1 className="signup-form__h1">{login ? 'Log In' : 'Sign Up'}</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form>
            <label htmlFor="email">
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="signup-form__input"
              />
            </label>
            <label htmlFor="password">
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="signup-form__input"
              />
            </label>
            <button type="submit" className="signup-form__button">
              {login ? 'Log In' : 'Sign Up'}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
