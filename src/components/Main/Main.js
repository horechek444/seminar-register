import React from 'react';
import './Main.css';
import {Form, Formik} from "formik";
import * as yup from "yup";
import Input from "../Input/Input";
import NumberFormat from 'react-number-format';
import {reportDirections} from "../../utils/utils";

const Main = () => {
  const phoneRegExp = /^(\+7[(\-) ]?)(\(?\d{3}\)?[(\-) ]?)?[\d\- ]{7,10}$/

  const validationSchema = yup.object().shape({
    secondName: yup.string().max(32).typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
    firstName: yup.string().max(32).typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
    middleName: yup.string().max(32).typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
    email: yup.string().max(32).email("Значение должно быть email-адресом").required("Поле обязательно к заполнению"),
    officePhone: yup.string().max(32).required("Поле обязательно к заполнению"),
    mobilePhone: yup.string().matches(phoneRegExp).required("Поле обязательно к заполнению"),
    companyId: yup.number().required("Поле обязательно к заполнению"), //todo
    position: yup.string().max(32).typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
  })

  return (
    <main className="main">
      <Formik initialValues={{
        secondName: '',
        firstName: '',
        middleName: '',
        email: '',
        officePhone: '',
        mobilePhone: '',
        companyId: '',
        position: ''
      }}
              validateOnBlur
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit
          }) => (
          <Form className="form">
            <div className="form__row">
              <Input type="text"
                     name="secondName"
                     handleChange={handleChange}
                     handleBlur={handleBlur}
                     values={values}
                     placeholder="Фамилия"
                     isRequired={true}
                     touched={touched}
                     errors={errors}
              />
              <Input type="text"
                     name="firstName"
                     handleChange={handleChange}
                     handleBlur={handleBlur}
                     values={values}
                     placeholder="Имя"
                     isRequired={true}
                     touched={touched}
                     errors={errors}
              />
              <Input type="text"
                     name="middleName"
                     handleChange={handleChange}
                     handleBlur={handleBlur}
                     values={values}
                     placeholder="Отчество"
                     isRequired={true}
                     touched={touched}
                     errors={errors}
              />
            </div>
            <div className="form__row">
              <div className="select__wrapper">
                <select
                  name="companyId"
                  value={values.companyId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Компания"
                >
                  <optgroup label="Периметр ПАО &laquo;НК &laquo;Роснефть&raquo;">
                    <option value="">Компания</option>*/}
                    <option value="1">АО "ИГиРГИ"</option>
                    <option value="2">ПАО «НК «РОСНЕФТЬ»</option>
                    <option value="3">АО «Востсибнефтегаз»</option>
                  </optgroup>
                  <optgroup label="Не входит в периметр ПАО &laquo;НК &laquo;Роснефть&raquo;">
                    <option value="4">Schlumberger</option>
                    <option value="5">Baker Hughes</option>
                    <option value="6">Halliburton</option>
                  </optgroup>
                </select>
                <span className="required">*</span>
                {touched.companyId && errors.companyId && <span className="error">{errors.companyId}</span>}
              </div>

              <Input type="text"
                     name="position"
                     handleChange={handleChange}
                     handleBlur={handleBlur}
                     values={values}
                     placeholder="Должность"
                     isRequired={true}
                     touched={touched}
                     errors={errors}
              />
            </div>

            <div className="form__row">
              <span>Участвую в семинаре как:</span>
              <button>Докладчик / соавтор</button>
              <button>Слушатель</button>
            </div>

            <div className="">
              <select name="companyId"
                      value={values.companyId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Компания">
                <option selected disabled>Направление доклада</option>
                {reportDirections.map((direction) => (
                  <option value={direction}>{direction}</option>
                  ))}
              </select>
            </div>

            <div className="form__row">
              <span>Форма участия:</span>
              <button>Очная</button>
              <button>Заочная</button>
            </div>

            <span>Информация для связи:</span>
            <div className="form__row">
              <Input type="email"
                     name="email"
                     handleChange={handleChange}
                     handleBlur={handleBlur}
                     values={values}
                     placeholder="Адрес электронной почты"
                     isRequired={true}
                     touched={touched}
                     errors={errors}
              />
              <Input type="phone"
                     name="officePhone"
                     handleChange={handleChange}
                     handleBlur={handleBlur}
                     values={values}
                     placeholder="Рабочий телефон"
                     isRequired={true}
                     touched={touched}
                     errors={errors}
              />

              <div className="input-wrapper">
                <label>
                  <NumberFormat type="phone"
                                name="mobilePhone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values["mobilePhone"]}
                                placeholder="Сотовый телефон"
                                className="input"
                                minLength="10"
                                maxLength="32"
                                format="+7 (###)###-##-##"
                  /><span className="required">*</span>
                </label>
                {touched["mobilePhone"] && errors["mobilePhone"] &&
                <span className="error">{errors["mobilePhone"]}</span>}
              </div>
            </div>

            <button disabled={!isValid}
                    onClick={handleSubmit}
                    type="submit">
              Отправить
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default Main;
