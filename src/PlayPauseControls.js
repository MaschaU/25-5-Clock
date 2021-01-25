import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faSync } from '@fortawesome/free-solid-svg-icons'

const PlayPauseControls = ({active}) => (
  <div className="play-pause-controls">
    <button id='start_stop'>{ active ? 
      <span><FontAwesomeIcon icon={faPause} /></span>:<span><FontAwesomeIcon icon={faPlay} /></span> }
    </button>
    <button id='reset'><FontAwesomeIcon icon={faSync} /></button>
  </div>  
);

export default PlayPauseControls;