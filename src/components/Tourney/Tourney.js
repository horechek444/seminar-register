import React from 'react';
import './Tourney.css';
import rig from "../../images/rig.jpeg";

const Tourney = ({company, children}) => {
  return (
    <section className="tourney">
      <h3 className="tourney__title">Планируете ли вы принять участие в турнире по геонавигации?</h3>
      <div className="tourney__wrapper">
        <img className="tourney__image" src={rig} alt="Буровая вышка"/>
        <div className="tourney__text">
          <p className="tourney__paragraph">Для участия в турнире не обязательно владеть специализированным ПО и быть
            геонавигатором. Любой участник может попробовать себя в роли геонавигатора, а наш симулятор Вам поможет.</p>
          {!company ? <p className="tourney__paragraph">Для участия в турнире выберите компанию!</p> :
            <div className="tourney__choice">
              <p className="tourney__paragraph">У вашей компании({company}) осталось 2 места</p>
              {children}
            </div>}
        </div>
      </div>
    </section>
  );
};

export default Tourney;
