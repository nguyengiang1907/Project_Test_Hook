import React, { useState, useRef, useEffect } from 'react';
import StartButton from '../component/StartButton';  
import StopButton from '../component/StopButton';    
import ResetButton from '../component/ResetButton';

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState<{ hours: number, minutes: number, seconds: number }>({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const timerIdRef = useRef<number | null>(null);

  const startHandler = () => {
    if (timerIdRef.current) return; 

    timerIdRef.current = window.setInterval(() => {
      setTime(prevTime => {
        const totalSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds + 1;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { hours, minutes, seconds };
      });
    }, 1000);
  };

  const stopHandler = () => {
    if (timerIdRef.current) {
      window.clearInterval(timerIdRef.current);
      timerIdRef.current = null; 
    }
  };

  const resetHandler = () => {
    if (timerIdRef.current) {
      window.clearInterval(timerIdRef.current);  
      timerIdRef.current = null;
    }
    setTime({ hours: 0, minutes: 0, seconds: 0 }); 
  };

  useEffect(() => {
    return () => {
      if (timerIdRef.current) {
        window.clearInterval(timerIdRef.current);
      }
    };
  }, []);

  return (
    <div style={{width:'350px', height:'200px', border:'solid 1px black', background:'black'}}>
      <h2 style={{color:'white'}}>Stopwatch</h2>
      <p style={{color:'white', fontSize:'25px'}}>{String(time.hours).padStart(2, '0')}:{String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}</p>
      <StartButton onStart={startHandler} />
      <StopButton onStop={stopHandler} />
      <ResetButton onReset={resetHandler} />
    </div>
  );
};

export default Stopwatch;