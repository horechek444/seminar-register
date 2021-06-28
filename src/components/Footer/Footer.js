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
        sitekey={process.env.CAPTCHA_KEY}
        render="explicit"
        onloadCallback={handleRecaptchaSTate}
        hl="ru"
      />
    </footer>
  );
};

export default Footer;
