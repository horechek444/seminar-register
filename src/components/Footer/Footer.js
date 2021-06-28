import React from 'react';
import './Footer.css';
import Recaptcha from "react-recaptcha";

const Footer = () => {
  const handleRecaptchaSTate = () => {
    console.log("recaptcha loaded");
  }

  return (
    <footer className="footer">
      <Recaptcha
        sitekey="6LeklFkbAAAAAI2mPRmQw4mwXZuiz-AaHmLGr-Ve"
        render="explicit"
        onloadCallback={handleRecaptchaSTate}
        hl="ru"
      />
    </footer>
  );
};


export default Footer;
