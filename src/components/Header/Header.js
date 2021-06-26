import React from 'react';
import './Header.css';
import Logo from "../Logo/Logo";
import Timer from "../Timer/Timer";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="header__wrapper">
        <h1 className="header__title">Регистрационная форма на семинар</h1>
        <span className="header__subtitle">До начала семинара осталось:</span>
        <Timer />
        <span className="header__dates">Ждем вас на семинаре с 29 сентября по 1 октября 2021 года</span>
      </div>
    </header>
  );
};

export default Header;
