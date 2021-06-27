import React from 'react';
import useTimer from "../../hooks/useTimer";
import './Timer.css';
import {timerNames} from "../../utils/utils";

const Timer = () => {
  const {times} = useTimer();

  const handleCorrectTiming = (name) => {
    return String(times[name]).length === 1 ? `0${times[name]}` : times[name];
  }

  return (
    <div className="timer">
      {timerNames.map((name) => (
        <div className="timer__field" key={name.en}>
          <span className="timer__number" >{handleCorrectTiming(name.en)}</span>
          {name.ru}
        </div>
      ))}
    </div>
  );
};

export default Timer;
