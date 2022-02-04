import "./style.css"
import React, { useState, useRef } from "react";
import Switch from "./Switch";
function App() {
  const [getFirstText, setFirstText] = useState("");
  const [getSecondText, setSecondText] = useState("");
  const [getTrim, setTrim] = useState(true)
  const [getCapital, setCapital] = useState(false);  
  const backRef = useRef(null)
  let diff = 0;




  function calculate() {
    let secondText = getSecondText;
    let firstText = getFirstText;
    if(!getCapital){
      firstText = firstText.toLowerCase();
      secondText = getSecondText.toLowerCase();
    }
   
    let element;
    
    let i = 0;
    let z = 0;
    while(i < secondText.length){
      if(getTrim){
        if(secondText.charAt(i) !== firstText.charAt(i)){
            element =  <>{element}<mark>{secondText.charAt(i)}</mark></>       
            diff += 1;
          }

        else {
          element =  <>{element}{secondText.charAt(i)}</>          
        }
      }
      else {
    
        while(firstText.charAt(z) === " "){
          z +=1;      

        }
        while(secondText.charAt(i) === " "){
          element =  <>{element}{secondText.charAt(i)}</>          
          
          i += 1
          
          
        }
          
          if(secondText.charAt(i) !== firstText.charAt(z)){
              element =  <>{element}<mark>{secondText.charAt(i)}</mark></>     
            
            diff += 1;


          }
          else {
            element =  <>{element}{secondText.charAt(i)}</>          
          }
        
        
      }
      z++
      i++
    }
      
    
    
    return [element,diff];
  }
  return (
    <div className="App">
      <h1>Text Compare</h1>
      <div className='container'>
        <h2 className='difference'>Difference {calculate()[1]} </h2>
        <div className='switches'>
          <label>Find WhiteSpace</label>
          <Switch flipSwitch={(getTrim) => setTrim(getTrim)} defaultValue={getTrim}></Switch>
          <label>Find CapitalCase</label>

          <Switch flipSwitch={(getCapital) => setCapital(getCapital)} defaultValue={getCapital}></Switch>
        </div>
        <div className='subContainer'>
          <div className='back' ref={backRef}>
            <div spellCheck="false" className="highlights">
                {calculate()[0]}
            </div>
          </div>
          <textarea  spellCheck="false" className='secondTextArea' onChange={(e) => {setSecondText(e.target.value)}} onScroll={(e) => {backRef.current.scrollTop = e.target.scrollTop}} value={getSecondText} placeholder="Place Text To Compare Here..."></textarea>
        </div>
        <textarea   spellCheck="false" className='firstTextArea' onChange={(e) => {setFirstText(e.target.value)}} value={getFirstText} placeholder="Place Original Text Here..."></textarea>
      </div>

    </div>
  );
}

export default App;
