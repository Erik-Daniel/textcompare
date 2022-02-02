import React from 'react';
import { useState } from 'react';
import "./switchStyle.css";

export default function Switch() {
    const [getSwitch, setSwitch] = useState(true);

    function handleSwitch(){
        if(!getSwitch){
            setSwitch(true);
        }
        else {
            setSwitch(false)
        }
    }
        
  return <div className={getSwitch ? 'switchOn' : "switchOff"} onClick={() => {handleSwitch()}}>
            <input type='checkbox'></input>
            <div className={getSwitch ? "sliderLeft" : "sliderRight"} ></div>
        </div>
}
