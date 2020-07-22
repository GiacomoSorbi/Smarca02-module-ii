import React from "react";
import "./signUpButton.css";

const SignUpButton = () => ({
  children,
  disabled,
  onClick = () => null,
  text = "Sign up",
}) => (
  <button className="signup-button" onClick={onClick} disabled={disabled}>
    {children || text}
  </button>
);

export default SignUpButton;
