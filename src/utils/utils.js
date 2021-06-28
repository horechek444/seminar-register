import * as yup from "yup";

// данные и расчеты для таймера

export const MILLISECONDS = 1000;
export const SECONDS = 60;
export const MINUTES = 60;
export const HOURS = 24;

export const dateOfSeminar = new Date(2021, 8, 29, 9, 0, 0, 0);

export const getTimes = (timeBeforeSeminar) => {
  return {
    seconds: Math.floor((timeBeforeSeminar / MILLISECONDS) % SECONDS),
    minutes: Math.floor((timeBeforeSeminar / MILLISECONDS / SECONDS) % MINUTES),
    hours: Math.floor((timeBeforeSeminar / (MILLISECONDS * SECONDS * MINUTES)) % HOURS),
    days: Math.floor(timeBeforeSeminar / (MILLISECONDS * SECONDS * MINUTES * HOURS)),
  };
};

export const startTimer = (setTimes) => {
  const interval = setInterval(() => {
    const dateNow = new Date();
    const timeBeforeSeminar = dateOfSeminar - dateNow;

    if (timeBeforeSeminar < 0) {
      clearInterval(interval);
    } else {
      setTimes(getTimes(timeBeforeSeminar));
    }
  }, 1000);

  return interval;
};

export const timerNames = [
  {en: 'days', ru: 'Дней'},
  {en: 'hours', ru: 'Часов'},
  {en: 'minutes', ru: 'Минут'},
  {en: 'seconds', ru: 'Секунд'}];

// данные для селектов

export let companies = [
  {
    label: "Периметр ПАО «НК «РОСНЕФТЬ»",
    options: [
      { value: 1, label: "АО ИГиРГИ", invite: 0},
      { value: 2, label: "ПАО «НК «РОСНЕФТЬ»", invite: 2},
      { value: 3, label: "АО «Востсибнефтегаз»", invite: 1}
    ]
  },
  {
    label: "Не входит в периметр ПАО «НК «РОСНЕФТЬ»",
    options: [
      { value: 4, label: "Schlumberger", invite: 1},
      { value: 5, label: "Baker Hughes", invite: 3},
    ]
  },
];

export const reportDirections = [
  {
    value: "Геологическое сопровождение бурения скважин",
    label: "Геологическое сопровождение бурения скважин"
  },
  {
    value: "Геомеханика",
    label: "Геомеханика"
  },
  {
    value: "Интерпретации данных ГИС при бурении",
    label: "Интерпретации данных ГИС при бурении"
  },
  {
    value: "Геолого-технологические исследования",
    label: "Геолого-технологические исследования"
  },
  {
    value: "Сейсмогеологический анализ",
    label: "Сейсмогеологический анализ"
  },
  {
    value: "Разработка месторождений горизонтальными скважинами",
    label: "Разработка месторождений горизонтальными скважинами"
  },
  {
    value: "ГРП и методы закачивания горизонтальных скважин",
    label: "ГРП и методы закачивания горизонтальных скважин"
  },
  {
    value: "Многозабойные горизонтальные скважины",
    label: "Многозабойные горизонтальные скважины"},
  {
    value: "Каротаж в процессе бурения. Полный комплекс ГИС российского производства",
    label: "Каротаж в процессе бурения. Полный комплекс ГИС российского производства",
  },
  {
    value: "Другое",
    label: "Другое"
  }
];

// данные для валидации

const phoneRegExp = /^.+\d.+\d{3}.+\d{3}.+\d{2}.+\d{2}$/;

export const validationSchemaForAll = yup.object().shape({
  secondName: yup.string().typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
  firstName: yup.string().typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
  middleName: yup.string().typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
  companyId: yup.object().required("Поле обязательно к заполнению"),
  position: yup.string().typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
  reportDirection: yup.object(),
  subject: yup.string().typeError("Значение должно быть строкой"),
  email: yup.string().email("Значение должно быть email-адресом"),
  officePhone: yup.string().required("Поле обязательно к заполнению"),
  mobilePhone: yup.string().matches(phoneRegExp, "Введите корректные данные").required("Поле обязательно к заполнению"),
  personalData: yup.string().required("Поле обязательно к заполнению"),
})

export const validationSchemaForSpeaker = yup.object().shape({
  secondName: yup.string().typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
  firstName: yup.string().typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
  middleName: yup.string().typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
  companyId: yup.object().required("Поле обязательно к заполнению"),
  position: yup.string().typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
  reportDirection: yup.object().required("Поле обязательно к заполнению"),
  subject: yup.string().typeError("Значение должно быть строкой").required("Поле обязательно к заполнению"),
  email: yup.string().email("Значение должно быть email-адресом").required("Поле обязательно к заполнению"),
  officePhone: yup.string().required("Поле обязательно к заполнению"),
  mobilePhone: yup.string().matches(phoneRegExp, "Введите корректные данные").required("Поле обязательно к заполнению"),
  personalData: yup.string().required("Поле обязательно к заполнению"),
})

export const validationSchemaPopup = yup.object().shape({
  companyName: yup.string().typeError("Значение должно быть строкой"),
})
