import React, {useState} from 'react';
import './Main.css';
import {Form, Formik} from "formik";
import * as yup from "yup";
import Input from "../Input/Input";
import NumberFormat from 'react-number-format';
import {reportDirections} from "../../utils/utils";

const Main = ({handlePopupOpen}) => {
  const [isSpeaker, setIsSpeaker] = useState(true);

  const handleToggleSpeaker = (e) => {
    e.preventDefault();
    setIsSpeaker(!isSpeaker);
  }

  const handleSetListener = (e) => {
    e.preventDefault();
    setIsSpeaker(false);
  }

  const phoneRegExp = /^(\+7[(\-) ]?)(\(?\d{3}\)?[(\-) ]?)?[\d\- ]{7,10}$/;

  const validationSchema = yup.object().shape({
    secondName: yup.string().max(32).typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
    firstName: yup.string().max(32).typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
    middleName: yup.string().max(32).typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
    companyId: yup.number().positive().integer().required("Поле обязательно к заполнению"),
    position: yup.string().max(32).typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
    reportDirection: yup.string().typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
    subject: yup.string().typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
    email: yup.string().max(32).email("Значение должно быть email-адресом").required("Поле обязательно к заполнению"),
    officePhone: yup.string().max(32).required("Поле обязательно к заполнению"),
    mobilePhone: yup.string().matches(phoneRegExp).required("Поле обязательно к заполнению"),
  })

  return (
    <main className="main">
      <Formik initialValues={{
        secondName: '',
        firstName: '',
        middleName: '',
        companyId: '',
        position: '',
        reportDirection: '',
        subject: '',
        email: '',
        officePhone: '',
        mobilePhone: '',
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
                    <option value="">Компания</option>
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
              <button className={isSpeaker ? "button button__speaker button__speaker_active" : "button button__speaker"}
                      onClick={handleToggleSpeaker}>Докладчик / соавтор</button>
              <button className={isSpeaker ? "button button__speaker" : "button button__speaker button__speaker_active"}
                      onClick={handleToggleSpeaker}>Слушатель</button>
            </div>

            <div className={isSpeaker ? "report report_active" : "report"}>
              <div className="form__row">
                <div className="select__wrapper">
                  <select name="reportDirection"
                          value={values.companyId}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Компания">
                    <option value="" selected disabled>Направление доклада</option>
                    {reportDirections.map((direction) => (
                      <option value={direction}>{direction}</option>
                    ))}
                  </select>
                  <span className="required">*</span>
                  {touched.reportDirection && errors.reportDirection && <span className="error">{errors.reportDirection}</span>}
                </div>
                <button className="button">Докладчик</button>
                <button className="button">Соавтор</button>
              </div>

              <div className="form__row">
                <Input type="text"
                       name="subject"
                       handleChange={handleChange}
                       handleBlur={handleBlur}
                       values={values}
                       placeholder="Тема доклада"
                       isRequired={true}
                       touched={touched}
                       errors={errors}
                />

                <textarea cols="20"
                          rows="5"
                          name="outline"
                          placeholder="Краткое содержание доклада"
                          className="textarea"
                />
              </div>
            </div>

            <div className="form__row">
              <span>Форма участия:</span>
              <button className="button">Очная</button>
              <button className="button">Заочная</button>
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
                <label className="form__label">
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

            <div className="form__row">
              <span className="footer__email">Остались вопросы? Напиши нам:&ensp;
                <a className="footer__link"
                   href="mailto:seminar@igirgi.su"
                   target="_blank"
                   rel="noreferrer"
                >seminar@igirgi.su
                </a>
              </span>
              <label>
                <input type="radio"/>&ensp;
                я согласен на&ensp;
                <a href="#" onClick={handlePopupOpen}>обработку персональных данных</a>
                <span className="required">*</span>
              </label>
            </div>

            <button disabled={!isValid}
                    onClick={handleSubmit}
                    type="submit"
                    className="submit button"
            >
              Отправить заявку
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default Main;
