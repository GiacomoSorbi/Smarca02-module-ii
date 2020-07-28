import React, { Component } from "react";
import "./signupForm.css";

// email regular expression to check email
const emailRegex = RegExp(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);

const formValid = (formErrors) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  return valid;
};

// with class components a constructor is necessary to have state
//while superextends the component in order to pass props
class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  }
  // this function prevents the page from reloading
  // (e) (event) in ES6 events propagate
  handleSubmit = (e) => {
    e.preventDefault();

    //function that validate the form
    if (formValid(this.state.formErrors)) {
      console.log(`SUBMITTING
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}
      Email: ${this.state.email}
      `);
    } else {
      console.log("FORM INVALID");
    }
  };

  // function that takes the name and value objects and checks for errors
  // changing their state
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    // with this switch statement rules for form validation are set
    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 && value.length > 0
            ? "minimum 3 characters required"
            : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 2 && value.length > 0
            ? "minimum 2 characters required"
            : "";
        break;
      case "email":
        formErrors.email =
          emailRegex.test(value) && value.length > 0
            ? ""
            : "invalid email address";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
        <form className="formWrapper" onSubmit={this.handleSubmit} noValidate>
          <h3 className="formTitle">Sign up to our newsletter</h3>
          <p className="formDescr">
            Receive news about our events and precious tips to keep your plants
            healthy and happy!
          </p>
          <div className="fullName">
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={
                  formErrors.firstName.length > 0 ? "inputError" : null
                }
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={this.handleChange} //onChange will implement changes
              />
              {formErrors.firstName.length > 0 && (
                <p className="errorMessage">{formErrors.firstName}</p> //this function assigns the errorMessage class to display set rules in case of errors
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "inputError" : null}
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <p className="errorMessage">{formErrors.lastName}</p>
              )}
            </div>
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              className={formErrors.email.length > 0 ? "inputError" : null}
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
            {formErrors.email.length > 0 && (
              <p className="errorMessage">{formErrors.email}</p>
            )}
          </div>
          <div className="signUp">
            <button type="submit"> SIGN UP</button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
