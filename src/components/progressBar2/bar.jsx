import React, { useState, useRef } from "react";

const Bar = () => {
  const [filled, setFilled] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  var intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current !== null) {
      console.log("Timer already running");
      return;
    }

    if (filled >= 500) {
      console.log("Already full");
      return;
    }
    intervalRef.current = setInterval(() => {
      setFilled((prev) => {
        if (prev >= 500) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 500;
        }
        return prev + 50;
      });
    }, 500);
  };
  const handleStop = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const handlePlay = () => {
    if (!intervalRef.current && filled < 500) {
      setIsPaused(false);
      handleStart(filled);
    }
  };
  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setFilled(0);
    setIsPaused(false);
  };

  return (
    <>
      <div
        className="bar"
        style={{ border: "solid 1px black", width: "500px", height: "50px" }}
      >
        <div
          className="filled-bar"
          style={{
            width: `${filled}px`,
            backgroundColor: "red",
            height: "40px",
          }}
        ></div>
      </div>
      <div className="btns" style={{ marginTop: "10px" }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default Bar;
