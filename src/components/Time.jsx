import React from "react";
import { useState } from "react";

function Time() {

  setInterval(startLiveClock, 1000);

  const now = new Date().toLocaleTimeString();
  
  const[time, setTime] = useState(now);
  const[liveTime, setLiveTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  function startLiveClock() {
    const live = new Date().toLocaleTimeString();
    setLiveTime(live);
  }

  return (
    <div className="container">
      <h1>Time Changes</h1>
      <h2>{time}</h2>
      <button onClick={updateTime}> Get Time</button>
      <h2>Live Clock: {liveTime}</h2>
      
    </div>
  );
  
}
export default Time;