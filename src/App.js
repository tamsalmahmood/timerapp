import React, { useState, useEffect } from 'react';
import './App.css';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('timer'); 

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (mode === 'timer') {
          setTime((time) => (time > 0 ? time - 1 : 0));
        } else if (mode === 'stopwatch') {
          setTime((time) => time + 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time, mode]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="timer">
      <h1>{formatTime(time)}</h1>
      <div>
        <button onClick={() => setTime(time + 30)} disabled={mode === 'stopwatch'}>+0:30</button>
        <button onClick={() => setTime(time + 60)} disabled={mode === 'stopwatch'}>+1:00</button>
        <button onClick={() => setTime(time + 300)} disabled={mode === 'stopwatch'}>+5:00</button>
        <button onClick={() => setTime(time - 30)} disabled={mode === 'stopwatch' || time === 0}>-0:30</button> {/* Decrement button */}
      </div>
      <div>
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={() => {
          setMode(mode === 'timer' ? 'stopwatch' : 'timer');
          setTime(0); // Reset time on mode change
        }}>
          Switch to {mode === 'timer' ? 'Stopwatch' : 'Timer'}
        </button>
      </div>
    </div>
  );
};

export default Timer;
