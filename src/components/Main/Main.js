import React, {useState} from 'react';
import './Main.css';
import {Form, Formik} from "formik";
import Input from "../Input/Input";
import NumberFormat from 'react-number-format';
import {reportDirections, validationSchemaForAll, validationSchemaForSpeaker, companies} from "../../utils/utils";
import Select from "react-select";

const Main = ({handlePopupOpen}) => {
  const [isSpeaker, setIsSpeaker] = useState(true);

  const handleToggleSpeaker = (e) => {
    e.preventDefault();
    setIsSpeaker(!isSpeaker);
  }

  const formatGroupLabel = (data) => (
    <>
      <span>{data.label}</span>
      <span>{data.options.length}</span>
    </>
  );

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
              validationSchema={isSpeaker ? validationSchemaForSpeaker : validationSchemaForAll}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            setFieldValue,
            setFieldTouched,
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
                <Select name="companyId"
                        options={companies}
                        value={values.companyId}
                        onChange={value => setFieldValue("companyId", value)}
                        onBlur={() => setFieldTouched("companyId", true)}
                        placeholder="Компания"
                        className="select"
                        error={errors.companyId}
                        touched={touched.companyId}
                        formatGroupLabel={formatGroupLabel}
                />
                <span className="required">*</span>
                {touched.companyId && errors.companyId &&
                <span className="error">{errors.companyId}</span>}

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
              <span className="form__title">Участвую в семинаре как:</span>
              <div className="form__wrapper">
                <button
                  className={isSpeaker ? "button button__speaker button__speaker_active" : "button button__speaker"}
                  onClick={handleToggleSpeaker}>Докладчик/соавтор
                </button>
                <button
                  className={isSpeaker ? "button button__speaker" : "button button__speaker button__speaker_active"}
                  onClick={handleToggleSpeaker}>Слушатель
                </button>
              </div>
            </div>

            <div className={isSpeaker ? "report report_active" : "report"}>
              <div className="form__row">
                <div className="select__wrapper">
                  <Select name="reportDirection"
                          options={reportDirections}
                          value={values.reportDirection}
                          onChange={value => setFieldValue("reportDirection", value)}
                          onBlur={() => setFieldTouched("reportDirection", true)}
                          placeholder="Направление доклада"
                          className="select"
                          error={errors.reportDirection}
                          touched={touched.reportDirection}
                  />
                  <span className="required">*</span>
                  {touched.reportDirection && errors.reportDirection &&
                  <span className="error">{errors.reportDirection}</span>}
                </div>
                <div className="form__wrapper">
                  <button className="button">Докладчик</button>
                  <button className="button">Соавтор</button>
                </div>
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
              <div className="form__wrapper">
                <button className="button">Очная</button>
                <button className="button">Заочная</button>
              </div>
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
