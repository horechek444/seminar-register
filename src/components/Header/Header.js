import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип компании Роснефть"/>
      <h1 className="header__title">Регистрационная форма</h1>
    </header>
  );
};

export default Header;
