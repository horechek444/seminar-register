import {useEffect, useState, useRef} from 'react';
import {startTimer, getTimes, dateOfSeminar} from "../utils/utils";

const useTimer = () => {
  const [times, setTimes] = useState(() => {
    const dateNow = new Date();
    const timeBeforeSeminar = dateOfSeminar - dateNow;
    return getTimes(timeBeforeSeminar);
  });
  const interval = useRef();

  useEffect(() => {
    interval.current = startTimer(setTimes);
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return {times};
};

export default useTimer;
