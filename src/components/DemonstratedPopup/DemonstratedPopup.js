import React from 'react';
import Popup from "../Popup/Popup";

const DemonstratedPopup = ({isOpen, onClose, values}) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <p>{values}</p>
    </Popup>
  );
};

export default DemonstratedPopup;
