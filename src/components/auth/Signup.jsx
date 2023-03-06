import PropTypes from "prop-types";
import React from "react";
import Google from "../../assets/images/google.svg";
import SignImg1 from "../../assets/images/sign1img.svg";

function Signup({ loginSelectHandler }) {
  return (
    <div className="signup">
      <div className="signup-left">
        <p className="signup-title">SignUp</p>
        <p className="signup-des">
          Please fill your detail to create your account.
        </p>
        <div className="signup-form">
          <label htmlFor="fullName" className="signup-label">
            Full Name
            <br />
            <input type="text" className="signup-form-input" />
          </label>
        </div>
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
        <div className="signup-form">
          <label htmlFor="fullName" className="signup-label">
            Re-type Password
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
            Sign Up
          </button>
        </div>
        <div className="signup-form">
          <button type="button" className="sign-btn sign-btn__google">
            <img src={Google} alt="" />
            Sign Up with Google
          </button>
        </div>
        <div className="signup-form signup-form__already">
          <p className="signup-form__already-account">
            Already have an account?
          </p>
          <div
            onClick={() => loginSelectHandler("signin")}
            aria-hidden
            className="signup-form__signin"
          >
            Sign In
          </div>
        </div>
      </div>
      <img src={SignImg1} alt="" className="signup-img" />
    </div>
  );
}

export default Signup;

Signup.propTypes = {
  loginSelectHandler: PropTypes.func.isRequired,
};
