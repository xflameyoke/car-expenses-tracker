import React from 'react';
import Footer from '../../layout/footer';
import './signUpPage.scss';

const SignUpPage = () => (
  <div className="signup">
    <div className="signup-header">
      Already have an account?
      <span className="signup-header__login">Log In</span>
    </div>
    <div className="signup-form">
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="signup-form__input"
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            name="password"
            type="text"
            placeholder="Password"
            className="signup-form__input"
          />
        </label>
      </form>
    </div>
    <Footer />
  </div>
);

export default SignUpPage;
