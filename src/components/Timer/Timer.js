import React from 'react';
import useTimer from "../../hooks/useTimer";
import './Timer.css';

const Timer = () => {
  const {times} = useTimer();

  return (
    <div className="timer">
      <div className="timer__field">
        <span className="timer__number">{String(times.days).length === 1 ? `0${times.days}` : times.days}</span>
        Дней
      </div>
      <div className="timer__field">
        <span className="timer__number">{String(times.hours).length === 1 ? `0${times.hours}` : times.hours}</span>
        Часов
      </div>
      <div className="timer__field">
        <span className="timer__number">{String(times.minutes).length === 1 ? `0${times.minutes}` : times.minutes}</span>
        Минут
      </div>
      <div className="timer__field">
        <span className="timer__number">{String(times.seconds).length === 1 ? `0${times.seconds}` : times.seconds}</span>
        Секунд
      </div>
    </div>
  );
};

export default Timer;
