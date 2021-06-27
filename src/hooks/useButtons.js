import {useState} from "react";

const useButtons = () => {
  const [isSpeaker, setIsSpeaker] = useState(true);
  const [isListener, setIsListener] = useState(false);
  const [isCoAuthor, setIsCoAuthor] = useState(false);
  const [isMainAuthor, setIsMainAuthor] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [isTournamentYes, setIsTournamentYes] = useState(false);
  const [isTournamentNo, setIsTournamentNo] = useState(false);
  const [isTournamentUndecided, setIsTournamentUndecided] = useState(false);

  const handleSpeaker = (e) => {
    e.preventDefault();
    setIsSpeaker(true);
    setIsListener(false);
  }

  const handleListener = (e) => {
    e.preventDefault();
    setIsSpeaker(false);
    setIsListener(true);
  }

  const handleCoAuthor = (e) => {
    e.preventDefault();
    setIsCoAuthor(true);
    setIsMainAuthor(false);
  }

  const handleMainAuthor = (e) => {
    e.preventDefault();
    setIsCoAuthor(false);
    setIsMainAuthor(true);
  }

  const handleOffline = (e) => {
    e.preventDefault();
    setIsOffline(true);
    setIsOnline(false);
  }

  const handleOnline = (e) => {
    e.preventDefault();
    setIsOffline(false);
    setIsOnline(true);
  }

  const handleTournamentYes = (e) => {
    e.preventDefault();
    setIsTournamentYes(true);
    setIsTournamentNo(false);
    setIsTournamentUndecided(false);
  }

  const handleTournamentNo = (e) => {
    e.preventDefault();
    setIsTournamentYes(false);
    setIsTournamentNo(true);
    setIsTournamentUndecided(false);
  }

  const handleTournamentUndecided = (e) => {
    e.preventDefault();
    setIsTournamentYes(false);
    setIsTournamentNo(false);
    setIsTournamentUndecided(true);
  }

  const handleButtonsReset = () => {
    setIsSpeaker(true);
    setIsListener(false);
    setIsCoAuthor(false);
    setIsMainAuthor(false);
    setIsOffline(false);
    setIsOnline(false);
    setIsTournamentYes(false);
    setIsTournamentNo(false);
    setIsTournamentUndecided(false);
  }

  return {
    isSpeaker,
    isListener,
    isCoAuthor,
    isMainAuthor,
    isOnline,
    isOffline,
    isTournamentYes,
    isTournamentNo,
    isTournamentUndecided,
    handleTournamentYes,
    handleTournamentNo,
    handleTournamentUndecided,
    handleSpeaker,
    handleListener,
    handleCoAuthor,
    handleMainAuthor,
    handleOffline,
    handleOnline,
    handleButtonsReset
  };
};

export default useButtons;
