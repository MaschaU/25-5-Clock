import React from "react";

const Timer = ({currentTimerMode, time}) => (
  <div className="timer">
    {/*It will switch between Session and Break */}
    <h1>{currentTimerMode === "session" ? "Session" : "Break"}</h1>
    <h1>{time}</h1>
  </div>
)

export default Timer;