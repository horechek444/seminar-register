import React from 'react';
import './Popup.css';

const Popup = ({isOpen, onClose, children}) => {
  const handleEscapeClose = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscapeClose, false);

    return () => {
      document.removeEventListener("keydown", handleEscapeClose, false);
    };
  }, [isOpen]);

  const handleOverlayClose = (event) => {
    if (event.target === event.currentTarget && isOpen) {
      onClose();
    }
  };

  return (
    <section className={isOpen ? "popup popup_opened" : "popup"}
             onMouseUp={handleOverlayClose}>
      <div className="popup__container">
        {children}
        <span className="popup__company">АО "ИГиРГИ"</span>
      </div>
    </section>
  );
};

export default Popup;
