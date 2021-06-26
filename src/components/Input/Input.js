import React from 'react';
import './Input.css';

const Input = ({type, name, handleChange, handleBlur, values, placeholder, isRequired, touched, errors}) => {
  return (
    <div className="input-wrapper">
      <label>
        <input
          type={type}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name]}
          placeholder={placeholder}
          className="input"
          maxLength="32"
        />{isRequired ? <span className="required">*</span> : null}
      </label>
      {touched[name] && errors[name] && <span className="error">{errors[name]}</span>}
    </div>
  );
};

export default Input;
