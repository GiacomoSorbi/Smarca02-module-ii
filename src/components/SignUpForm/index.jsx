import React from "react";
import SignUpButton from "../SignUpButton";
import "./signUpForm.css";

const SignUpForm = () => ({ children, onSubmit }) => (
  <form className="SignUpForm" onSubmit={onSubmit}>
    <h1 className="formHeader"> Sign up to our mailing list</h1>
    <p className="formText">
      Sign up for news on our next events and for precious tips to keep your
      plants healthy and happy!
    </p>
    {children}
    <SignUpButton disabled={!onSubmit}>SIGN UP</SignUpButton>
  </form>
);

export default SignUpForm;
