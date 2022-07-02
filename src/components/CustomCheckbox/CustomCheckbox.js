// import { Checkbox, checkboxClasses, FilledInput, FormControlLabel } from "@mui/material";
import React from "react";
import './CustomCheckbox.scss'

const CustomCheckbox = ({ name, id, ariaLabel, label, onChange }) => {

  
  return (
    <div className="custom-checkbox">
      <input name={name} id={id} type={'checkbox'} aria-label={ariaLabel} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CustomCheckbox;
