import React from 'react';
import Popup from "../Popup/Popup";

const PersonalDataPopup = ({isOpen, onClose}) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <h3 className="popup__title">Согласие</h3>
      <p className="popup__paragraph">Нажимая кнопку «отправить заявку», я даю свое согласие на обработку моих персональных данных,
        в соответствии с&ensp;
        <a href="http://www.consultant.ru/document/cons_doc_LAW_61801/" target="_blank" rel="noreferrer">
          Федеральным законом от 27.07.2006 года №152-ФЗ«О персональных данных»
        </a>,
        на условиях и для целей, определенных в Согласии на обработку персональных данных.</p>
      <span className="popup__company">АО "ИГиРГИ"</span>
    </Popup>
  );
};

export default PersonalDataPopup;
