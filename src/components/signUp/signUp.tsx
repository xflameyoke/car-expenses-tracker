import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import { signInWithGoogle } from '../../firebase';
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

  const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = 'Required!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };

  const validatePassword = (value: string) => {
    let error;
    if (!value) {
      error = 'Required!';
    }
    return error;
  };

  return (
    <main>
      <div className="signup">
        <header>
          <div className="signup-header">
            Already have an account?
            <span className="signup-header__login" onClick={loginChange}>
              Log In
            </span>
          </div>
        </header>
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
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <label htmlFor="email">
                  {errors.email && touched.email && (
                    <p className="signup-form__error">{errors.email}</p>
                  )}
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="signup-form__input"
                    validate={validateEmail}
                  />
                </label>
                <label htmlFor="password">
                  {errors.password && touched.password && (
                    <p className="signup-form__error">{errors.password}</p>
                  )}
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="signup-form__input"
                    validate={validatePassword}
                  />
                </label>
                <button
                  type="submit"
                  className="signup-form__button"
                  disabled={isSubmitting}
                >
                  {login ? 'Log In' : 'Sign Up'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <button className="signup-form__button" onClick={signInWithGoogle}>
          Sign In With Google
        </button>
      </div>
    </main>
  );
};

export default SignUp;
