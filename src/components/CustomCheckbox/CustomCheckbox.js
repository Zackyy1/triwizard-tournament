import React, { useRef } from "react";
import './CustomCheckbox.scss'
import ReactDOMServer from 'react-dom/server'

const CustomCheckbox = ({ name, ariaLabel, label, onChange, required }) => {

  const labelTempDiv = document.createElement('div')
  try {
    labelTempDiv.innerHTML = label && ReactDOMServer.renderToString(label)
  } catch (e) {
    console.warn('Component rerendered in unexpected manner. No problem, just MUI being funky.')
  }

  const checkboxRef = useRef(null)

  return (
    <div className="custom-checkbox">
      <input ref={checkboxRef} onChange={() => onChange(checkboxRef.current?.checked)} required={required} name={name} id={name} type={'checkbox'} aria-label={ariaLabel || labelTempDiv.textContent} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default CustomCheckbox;
