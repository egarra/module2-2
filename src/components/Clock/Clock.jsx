import { useState, useEffect, useRef } from 'react';

export const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const intervalId = useRef(null);
  
  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId.current);
  }, []);
  return <p>{time}</p>;
}

