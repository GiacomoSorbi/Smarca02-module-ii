import React, { useState } from "react";
import SignUpForm from "../SignUpForm";
import "./signUpInput.css";

function SignUpInput() {
  const useSignUpForm = () => {
    const [inputs, setInputs] = useState({});
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
      }
    };
    const handleInputChange = (event) => {
      event.persist();
      setInputs((inputs) => ({
        ...inputs,
        [event.target.name]: event.target.value,
      }));
    };
    return {
      handleSubmit,
      handleInputChange,
      inputs,
    };
  };
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(SignUpForm);

  return (
    <>
      <div className="signup-container">
        <SignUpForm onSubmit={handleSubmit}>
          <div className="fullname-inputs">
            <label>First Name</label>
            <input
              type="firstName"
              name="firstName"
              placeholder="First Name"
              onChange={handleInputChange}
              value={inputs.firstName}
              required
            />
            <label>First Name</label>
            <input
              type="lastName"
              name="lastName"
              placeholder="Last Name"
              onChange={handleInputChange}
              value={inputs.lastName}
              required
            />
          </div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </SignUpForm>
      </div>
    </>
  );
}

export default SignUpInput;
