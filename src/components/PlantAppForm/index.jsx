import React from "react";
// props are passed to the form
const PlantAppForm = ({ children, ...props }) => (
  <form {...props}>{children}</form>
);

export default PlantAppForm;
