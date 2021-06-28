import React from 'react';
import Popup from "../Popup/Popup";
import Button from "../Button/Button";
import './AddCompanyPopup.css';
import {companies, validationSchemaPopup} from "../../utils/utils";
import {Form, Formik} from "formik";

const AddCompanyPopup = ({isOpen, onClose}) => {
  const handleNumber = () => {
    const lengthOfCompaniesArray = companies[1].options.length;
    return (companies[1].options[lengthOfCompaniesArray - 1].value) + 1;
  }

  const handleSubmit = (values, {resetForm}) => {
    companies[1].options.push({value: handleNumber(), label: values.companyName, invite: 5});
    resetForm({values: ''});
    onClose();
  }

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <h3 className="popup__title">Добавить компанию</h3>
      <div className="popup__wrapper">
        <Formik initialValues={{
          companyName: '',
        }}
                validateOnBlur
                onSubmit={handleSubmit}
                validationSchema={validationSchemaPopup}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              handleSubmit,
            }) => (
            <Form>
              <input className="input popup__input"
                     type="text"
                     name="companyName"
                     placeholder="Название"
                     onBlur={handleBlur}
                     value={values["companyName"]}
                     onChange={handleChange}
              />
              {touched["companyName"] && errors["companyName"] &&
              <span className="error">{errors["companyName"]}</span>}
              <Button className="button popup__button"
                      onClick={handleSubmit}
                      type="button"
                      title="Добавить"
                      disabled={!isValid || values["companyName"] === ''}
              />
            </Form>
          )}
        </Formik>
      </div>
    </Popup>
  );
};

export default AddCompanyPopup;
