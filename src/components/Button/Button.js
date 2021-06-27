import React from 'react';
import './Button.css';

const Button = ({className, onClick, title, disabled, type}) => {
  return (
    <button className={className}
            onClick={onClick}
            disabled={disabled}
            type={type}
    >{title}
    </button>
  );
};

export default Button;
