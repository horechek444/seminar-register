import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';

const Header = () => {
  let date = new Date().toDateString();
  console.log(date);
  return (
    <header className="header">
      <a className="header__link" href="https://seminar.igirgi.su/">
        <img className="header__logo" src={logo} alt="Логотип компании Роснефть"/>
      </a>
      <div className="header__wrapper">
        <h1 className="header__title">Регистрационная форма на семинар</h1>
        <span className="header__subtitle">До начала семинара осталось:</span>
        <span className="header__dates">Ждем вас на семинаре с 29 сентября по 1 октября 2021 года</span>
      </div>
    </header>
  );
};

export default Header;
