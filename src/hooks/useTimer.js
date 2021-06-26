import {useEffect, useState, useRef} from 'react';
import {HOURS, MILLISECONDS, MINUTES, SECONDS} from "../utils/utils";

const useTimer = () => {
  const dateOfSeminar = new Date(2021, 8, 29, 9, 0, 0, 0);
  const dateNow = new Date();
  const timeBeforeSeminar = dateOfSeminar - dateNow;
  const secondsBeforeSeminar = Math.floor((timeBeforeSeminar/MILLISECONDS) % SECONDS);
  const minutesBeforeSeminar = Math.floor((timeBeforeSeminar/MILLISECONDS/SECONDS) % MINUTES);
  const hoursBeforeSeminar = Math.floor((timeBeforeSeminar/(MILLISECONDS*SECONDS*MINUTES)) % HOURS);
  const daysBeforeSeminar = Math.floor(timeBeforeSeminar/(MILLISECONDS * SECONDS * MINUTES * HOURS));

  const [days, setDays] = useState(daysBeforeSeminar);
  const [hours, setHours] = useState(hoursBeforeSeminar);
  const [minutes, setMinutes] = useState(minutesBeforeSeminar);
  const [seconds, setSeconds] = useState(secondsBeforeSeminar);

  let interval = useRef();

  const startTimer = () => {
    const dateOfSeminar = new Date(2021, 8, 29, 9, 0, 0, 0)

    interval = setInterval(() => {
      const dateNow = new Date();
      const timeBeforeSeminar = dateOfSeminar - dateNow;

      const secondsBeforeSeminar = Math.floor((timeBeforeSeminar / MILLISECONDS) % SECONDS);
      const minutesBeforeSeminar = Math.floor((timeBeforeSeminar / MILLISECONDS / SECONDS) % MINUTES);
      const hoursBeforeSeminar = Math.floor((timeBeforeSeminar/(MILLISECONDS * SECONDS * MINUTES)) % HOURS);
      const daysBeforeSeminar = Math.floor(timeBeforeSeminar/(MILLISECONDS * SECONDS * MINUTES * HOURS));

      if (timeBeforeSeminar < 0) {
        clearInterval(interval.current);
      } else {
        setDays(daysBeforeSeminar);
        setHours(hoursBeforeSeminar);
        setMinutes(minutesBeforeSeminar);
        setSeconds(secondsBeforeSeminar);
      }
    }, 1000)
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  }, [])
  return {days, hours, minutes, seconds};
};

export default useTimer;
