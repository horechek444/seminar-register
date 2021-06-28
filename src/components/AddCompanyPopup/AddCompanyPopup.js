import React from 'react';
import Popup from "../Popup/Popup";
import Button from "../Button/Button";
import './AddCompanyPopup.css';
import {companies, validationSchemaPopup, valueNumber} from "../../utils/utils";
import {Form, Formik} from "formik";

const AddCompanyPopup = ({isOpen, onClose}) => {
  // const handleSubmit = (values) => {
  //   companies[1].options.push({value: valueNumber, label: values.companyName});
  //   console.log(companies);
  // }

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <h3 className="popup__title">Добавить компанию</h3>
      <div className="popup__wrapper">
        <Formik initialValues={{
          companyName: '',
        }}
                validateOnBlur
                onSubmit={(values, {resetForm}) => {
                  companies[1].options.push({value: valueNumber, label: values.companyName, invite: 5});
                  resetForm({values: ''});
                  onClose();
                  console.log(companies)
                }}
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
                      disabled={!isValid || (Object.keys(touched).length === 0 && touched.constructor === Object)}
              />
            </Form>
          )}
        </Formik>
      </div>
    </Popup>
  );
};

export default AddCompanyPopup;
