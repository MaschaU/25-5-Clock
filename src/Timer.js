import React from "react";

const Timer = ({currentTimerMode, time}) => (
  <div className="timer">
    {/*It will switch between Session and Break */}
    <h1 id="timer-label">{currentTimerMode === "session" ? "Session" : "Break"}</h1>
    <h1 id="time-left">{time}</h1>
  </div>
)

export default Timer;