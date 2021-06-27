import React from 'react';
import './Button.css';

const Button = ({className, onClick, title, disabled, type, name}) => {
  return (
    <button className={className}
            onClick={onClick}
            disabled={disabled}
            type={type}
            name={name}
    >{title}
    </button>
  );
};

export default Button;
