import React from 'react';
import Select from "react-select";
import './CustomSelect.css';

const CustomSelect = ({name, placeholder, options, values, setFieldValue, setFieldTouched, errors, touched, setCompany}) => {
  const formatGroupLabel = (data) => (
    <>
      <span>{data.label}</span>
    </>
  );

  const handleSelectChange = (value) => {
    setFieldValue(name, value);
    setCompany(value);
  };

  const handleSelectBlur = () => {
    setFieldTouched(name, true);
  };

  return (
    <div className="select__wrapper">
      <Select name={name}
              options={options}
              value={values[name]}
              onChange={handleSelectChange}
              onBlur={handleSelectBlur}
              placeholder={placeholder}
              className="select"
              error={errors[name]}
              touched={errors[name]}
              formatGroupLabel={formatGroupLabel}
      />
      <span className="required">*</span>
      {touched[name] && errors[name] && <span className="error">{errors[name]}</span>}
    </div>
  )
};

export default CustomSelect;
