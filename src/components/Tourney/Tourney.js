import React from 'react';
import './Tourney.css';
import rig from "../../images/rig.jpeg";
import Button from "../Button/Button";
import useButtons from "../../hooks/useButtons";

const Tourney = ({company}) => {
  const {
    isTournamentYes,
    isTournamentNo,
    isTournamentUndecided,
    handleTournamentYes,
    handleTournamentNo,
    handleTournamentUndecided,
  } = useButtons();
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
              <div className="tourney__buttons-wrapper">
                <Button className={isTournamentYes ? "button tourney__button button_active" : "button tourney__button"}
                        onClick={handleTournamentYes}
                        type="button"
                        title="Планирую"
                />
                <Button className={isTournamentNo ? "button tourney__button button_active" : "button tourney__button"}
                        onClick={handleTournamentNo}
                        type="button"
                        title="Не планирую" />
                <Button className={isTournamentUndecided ? "button tourney__button button_active" : "button tourney__button"}
                        onClick={handleTournamentUndecided}
                        type="button"
                        title="Не определился(-лась)" />
              </div>
            </div>}
        </div>
      </div>
    </section>
  );
};

export default Tourney;
