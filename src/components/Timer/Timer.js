import React from 'react';
import useTimer from "../../hooks/useTimer";
import './Timer.css';

const Timer = () => {
  const {days, hours, minutes, seconds} = useTimer();

  return (
    <div className="timer">
      <div className="timer__field">
        <span className="timer__number">{String(days).length === 1 ? `0${days}` : days}</span>
        Дней
      </div>
      <div className="timer__field">
        <span className="timer__number">{String(hours).length === 1 ? `0${hours}` : hours}</span>
        Часов
      </div>
      <div className="timer__field">
        <span className="timer__number">{String(minutes).length === 1 ? `0${minutes}` : minutes}</span>
        Минут
      </div>
      <div className="timer__field">
        <span className="timer__number">{String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
        Секунд
      </div>
    </div>
  );
};

export default Timer;
