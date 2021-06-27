import React from 'react';
import Select from "react-select";
import {companies} from "../../utils/utils";

const CustomSelect = ({values, setFieldValue, setFieldTouched, errors, touched}) => {
  const formatGroupLabel = (data) => (
    <span>{data.group}</span>
  );

  return (
    <>
      <Select name="companyId"
              options={companies}
              value={values.companyId}
              onChange={value => setFieldValue("companyId", value)}
              onBlur={() => setFieldTouched("companyId", true)}
              placeholder="Компания"
              className="select"
              error={errors.companyId}
              touched={errors.companyId}
              formatGroupLabel={formatGroupLabel}
      />
      <span className="required">*</span>
      {touched.companyId && errors.companyId && <span className="error">{errors.companyId}</span>}
    </>
  )
};

export default CustomSelect;
