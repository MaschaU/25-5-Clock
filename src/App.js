import React from "react";
import './App.css';
import Header from "./Header";
import Timer from "./Timer";

class App extends React.Component {

  state = {
    initialBreakValue: 5,
    initialSessionValue: 25,
  }

  render() {
    return(
      <div>
        <Header/>
        <div>
          <Timer type="Break" value={this.state.initialBreakValue}/>
          <Timer type="Session" value={this.state.initialSessionValue}/>
        </div>
      </div>
    )
  }
}
export default App;
