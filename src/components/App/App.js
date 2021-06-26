import React, {useState} from 'react';
import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PersonalDataPopup from "../PersonalDataPopup/PersonalDataPopup";
import Main from "../Main/Main";

function App() {
  const [showPersonalDataPopup, setShowPersonalDataPopup] = useState(false);

  const handlePopupOpen = (e) => {
    e.preventDefault();
    setShowPersonalDataPopup(true);
  }

  const handlePopupClose = () => {
    setShowPersonalDataPopup(false);
  }

  return (
    <div className="main__background">
      <div className="main__wrapper">
        <Header />
        <Main />
        <Footer handlePopupOpen={handlePopupOpen} />
        <PersonalDataPopup isOpen={showPersonalDataPopup} onClose={handlePopupClose} />
      </div>
    </div>
  );
}

export default App;
