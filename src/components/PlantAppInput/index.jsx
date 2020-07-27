import React from "react";
// props are destructured to populate the input with a label and id
const PlantAppInput = ({ label, id, ...props }) => (
  <>
    {label && <label htmlFor={id}>{label}</label>}
    <input id={id} {...props} />
  </>
);

export default PlantAppInput;
