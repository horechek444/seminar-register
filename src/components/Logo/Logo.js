import React from 'react';
import logo from '../../images/logo.svg';
import './Logo.css';

const Logo = () => {
  return (
    <a className="logo__link" href="https://seminar.igirgi.su/">
      <img className="logo" src={logo} alt="Логотип компании Роснефть"/>
    </a>
  );
};

export default Logo;
