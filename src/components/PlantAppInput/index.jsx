import React from "react";

const PlantAppInput = ({ label, id, ...props }) => (
  <>
    {label && <label htmlFor={id}>{label}</label>}
    <input id={id} {...props} />
  </>
);

export default PlantAppInput;
