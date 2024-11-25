import React, { useState, useRef } from "react";

const HtmlRef = () => {
  const [seconds, setSeconds] = useState(0);
  const timeRef = useRef(null);
  const start = () => {
    if (timeRef.current)return;
       timeRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
  };
  const stop = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  return (
    <div style={{ paddingTop: "30px", textAlign: "center" }}>
      <h4>{seconds}</h4>
      <button onClick={start }>START TIMER</button>
      <button onClick={stop}>STOP TIMER</button>
    </div>
  );
};

export default HtmlRef;
