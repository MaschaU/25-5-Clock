import React from "react";
import './App.css';
import Header from "./Header";
import Timer from "./Timer";

class App extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <div>
          <Timer type="Break"/>
          <Timer type="Session"/>
        </div>
      </div>
    )
  }
}
export default App;
