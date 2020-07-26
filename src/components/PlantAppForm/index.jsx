import React from "react";

const PlantAppForm = ({ children, ...props }) => (
  <form {...props}>{children}</form>
);

export default PlantAppForm;
