import React from "react";
import './App.css';
import Header from "./Header";
import TimerControls from "./TimerControls";
import Timer from "./Timer";
import moment from "moment";

class App extends React.Component {

  state = {
    initialBreakValue: 5,
    initialSessionValue: 25,
    currentTimerMode: "session",
    time: 25 * 60 * 1000,

  }

  render() {
    return(
      <div>
        <Header/>
        <div className="settings">
          <TimerControls type="Break" value={this.state.initialBreakValue}/>
          <TimerControls type="Session" value={this.state.initialSessionValue}/>
        </div>
        <Timer mode={this.state.currentTimerMode} time={moment(this.state.time).format("mm:ss")}/>
      </div>
    )
  }
}
export default App;
