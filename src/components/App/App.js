import React, {useState} from 'react';
import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PersonalDataPopup from "../PersonalDataPopup/PersonalDataPopup";
import Main from "../Main/Main";
import AddCompanyPopup from "../AddCompanyPopup/AddCompanyPopup";

function App() {
  const [showPersonalDataPopup, setShowPersonalDataPopup] = useState(false);
  const [showAddCompanyPopup, setShowAddCompanyPopup] = useState(false);

  const handlePersonalDataPopupOpen = (e) => {
    e.preventDefault();
    setShowPersonalDataPopup(true);
  }

  const handleAddCompanyPopupOpen = (e) => {
    e.preventDefault();
    setShowAddCompanyPopup(true);
  }

  const handlePopupClose = () => {
    setShowPersonalDataPopup(false);
    setShowAddCompanyPopup(false);
  }

  return (
    <div className="main__background">
      <div className="main__wrapper">
        <Header/>
        <Main handlePersonalDataPopupOpen={handlePersonalDataPopupOpen}
              handleAddCompanyPopupOpen={handleAddCompanyPopupOpen}
        />
        <Footer />
        <PersonalDataPopup isOpen={showPersonalDataPopup} onClose={handlePopupClose}/>
        <AddCompanyPopup isOpen={showAddCompanyPopup} onClose={handlePopupClose}/>
      </div>
    </div>
  );
}

export default App;
