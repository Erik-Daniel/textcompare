import React from 'react';
import { useState } from 'react';
import "./switchStyle.css";

export default function Switch(props) {
    const [getSwitch, setSwitch] = useState(props.defaultValue);
    console.log(props.defaultValue)
    function handleSwitch(){
        if(!getSwitch){
            
            setSwitch(true);
            props.flipSwitch(true)
        }
        else {
            setSwitch(false)
            props.flipSwitch(false)

        }
    }
        
  return <div className={getSwitch ? 'switchOn' : "switchOff"} onClick={() => {handleSwitch(props)}}>
            <div className={getSwitch ? "sliderLeft" : "sliderRight"} ></div>
        </div>
}
