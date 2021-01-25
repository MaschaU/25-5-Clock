import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Timer = ({type}) => (
  <div>
    <div id={`${type}-label`}>{`${type} Length`}</div>
    <div>
      <button id={`${type}-decrement`}>          
        <FontAwesomeIcon style={{ fontSize: '2.5em' }} icon={faChevronDown} />
      </button>
      <div id={`${type}-length`}></div>
      <button id={`${type}-increment`}>
        <FontAwesomeIcon style={{ fontSize: '2.5em' }} icon={faChevronUp} />
      </button>
    </div>
  </div>
)

export default Timer;