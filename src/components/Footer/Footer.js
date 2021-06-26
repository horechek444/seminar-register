import React from 'react';
import './Footer.css';

const Footer = ({handlePopupOpen}) => {
  return (
    <footer className="footer">
      <span className="footer__email">Остались вопросы? Напиши нам:&ensp;
        <a className="footer__link" href="mailto:seminar@igirgi.su" target="_blank" rel="noreferrer">seminar@igirgi.su</a>
      </span>
      <label>
        <input type="radio"/>&ensp;
        я согласен на&ensp;
        <a href="#" onClick={handlePopupOpen}>обработку персональных данных</a>
        <span className="required">*</span>
      </label>
    </footer>
  );
};

export default Footer;
