import React, { useState, useRef } from 'react';

function TimerApp() {
  const [time, setTime] = useState(0); // Държи текущото време
  const intervalRef = useRef(null); // Референтен достъп до интервала

  const startTimer = () => {
    if (intervalRef.current !== null) return; // Prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // Reset the interval reference
    }
  };

  const resetTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // Reset the interval reference
    }
    setTime(0); // Reset the timer to 0
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Таймер: {time} сек</h1>
      <button onClick={startTimer}>Старт</button>
      <button onClick={pauseTimer}>Пауза</button>
      <button onClick={resetTimer}>Нулиране</button>
    </div>
  );
}

export default TimerApp;
