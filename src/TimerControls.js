import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const TimerControls = ({type, value}) => (
  <div>
    <div className="timerSettings">
      <div id={`${type}-label`}>{`${type} Length`}</div>
      <div className="timerSettingsControls">
        <button id={`${type}-decrement`}>          
          <FontAwesomeIcon style={{ fontSize: '2.5em' }} icon={faChevronDown} />
        </button>
        <div id={`${type}-length`}>{value}</div>
        <button id={`${type}-increment`}>
          <FontAwesomeIcon style={{ fontSize: '2.5em' }} icon={faChevronUp} />
        </button>
      </div>
    </div>
  </div>
)

export default TimerControls;