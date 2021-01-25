import React from "react";
import './App.css';
import Header from "./Header";
import TimerControls from "./TimerControls";
import Timer from "./Timer";
import PlayPauseControls from "./PlayPauseControls";
import moment from "moment";


class App extends React.Component {

  state = {
    initialBreakValue: 5,
    initialSessionValue: 25,
    currentTimerMode: "session",
    time: 25 * 60 * 1000,
    active: false,

  }
  // isIncrementing is a boolean while the second value corresponds with
  // either session or break value 
  handleSetTimer = (isIncrementing, type) => {
    this.setState({[type]: this.state[type] + (isIncrementing ? 1:-1)});
  } 

  render() {
    return(
      <div>
        <Header/>
        <div className="settings">
          <TimerControls type="break" value={this.state.initialBreakValue} handleClick={this.handleSetTimer}/>
          <TimerControls type="session" value={this.state.initialSessionValue}/>
        </div>
        <Timer mode={this.state.currentTimerMode} time={moment(this.state.time).format("mm:ss")}/>
        <PlayPauseControls active={this.state.active}/>
      </div>
    )
  }
}
export default App;
