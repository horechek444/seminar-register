import React, {useState} from 'react';
import './Main.css';
import {Form, Formik} from "formik";
import Input from "../Input/Input";
import NumberFormat from 'react-number-format';
import {reportDirections, validationSchemaForAll, validationSchemaForSpeaker, companies} from "../../utils/utils";
import CustomSelect from "../Select/CustomSelect";
import Button from "../Button/Button";

const Main = ({handlePopupOpen}) => {
  const [isSpeaker, setIsSpeaker] = useState(true);

  const handleToggleSpeaker = (e) => {
    e.preventDefault();
    setIsSpeaker(!isSpeaker);
  }

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
              <CustomSelect name="companyId"
                            placeholder="Компания"
                            options={companies}
                            values={values}
                            setFieldValue={setFieldValue}
                            setFieldTouched={setFieldTouched}
                            errors={errors}
                            touched={touched}
              />

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
                <Button className={isSpeaker ? "button button__speaker button__speaker_active" : "button button__speaker"}
                        onClick={handleToggleSpeaker}
                        title="Докладчик/соавтор"
                        type="button"
                />
                <Button
                  className={isSpeaker ? "button button__speaker" : "button button__speaker button__speaker_active"}
                  onClick={handleToggleSpeaker}
                  title="Слушатель"
                  type="button"
                />
              </div>
            </div>

            <div className={isSpeaker ? "report report_active" : "report"}>
              <div className="form__row">
                <CustomSelect name="reportDirection"
                              placeholder="Направление доклада"
                              options={reportDirections}
                              values={values}
                              setFieldValue={setFieldValue}
                              setFieldTouched={setFieldTouched}
                              errors={errors}
                              touched={touched}
                />
                <div className="form__wrapper">
                  <Button className="button"
                          title="Докладчик"
                          type="button"
                  />
                  <Button className="button"
                          title="Соавтор"
                          type="button"
                  />
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
              <span className="form__title">Форма участия:</span>
              <div className="form__wrapper">
                <Button className="button"
                        title="Очная"
                        type="button"
                />
                <Button className="button"
                        title="Заочная"
                        type="button"
                />
              </div>
            </div>

            <div className="form__row">
              <span className="form__title">Информация для связи:</span>
            </div>

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

            <Button className="submit button"
                    type="submit"
                    onClick={handleSubmit}
                    title="Отправить заявку"
            />
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default Main;
