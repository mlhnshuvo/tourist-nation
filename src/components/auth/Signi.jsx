import PropTypes from "prop-types";
import React from "react";
import Google from "../../assets/images/google.svg";
import SignImg1 from "../../assets/images/sign2img.svg";
// eslint-disable-next-line import/no-extraneous-dependencies

function SignIn({ loginSelectHandler }) {
  return (
    <div className="signup">
      <div className="signup-left">
        <p className="signup-title">Log In</p>
        <p className="signup-des">
          Please fill your detail to access your account.
        </p>
        <div className="signup-form">
          <label htmlFor="fullName" className="signup-label">
            Email
            <br />
            <input type="email" className="signup-form-input" />
          </label>
        </div>
        <div className="signup-form">
          <label htmlFor="fullName" className="signup-label">
            Password
            <br />
            <input type="password" className="signup-form-input" />
          </label>
        </div>
        <div className="signup-form signup-form__remember-forgot">
          <div className="signup-form__remember">
            <input type="checkbox" className="signup-form-input-checkbox" />
            <p>Remember me</p>
          </div>
          <p className="signup-form__forgot">Forgot Password?</p>
        </div>
        <div className="signup-form">
          <button type="button" className="sign-btn__signup sign-btn">
            Sign In
          </button>
        </div>
        <div className="signup-form">
          <button type="button" className="sign-btn sign-btn__google">
            <img src={Google} alt="" />
            Sign In with Google
          </button>
        </div>
        <div className="signup-form signup-form__already">
          <p className="signup-form__already-account">
            Don’t have an account? Sign up
          </p>
          <div
            onClick={() => loginSelectHandler("signup")}
            aria-hidden
            className="signup-form__signin"
          >
            Sign up
          </div>
        </div>
      </div>
      <img src={SignImg1} alt="" className="signup-img" />
    </div>
  );
}

export default SignIn;

SignIn.propTypes = {
  loginSelectHandler: PropTypes.func.isRequired,
};
