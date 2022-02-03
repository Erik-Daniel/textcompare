import "./style.css"
import React, { useState } from "react";
import Switch from "./Switch";
function App() {
  const [getFirstText, setFirstText] = useState("");
  const [getSecondText, setSecondText] = useState("");
  const [getDiffRate, setDiffRate] = useState(0)
  const [getTrim, setTrim] = useState(true)
  const [getCapital, setCapital] = useState(false);  
  let trimState = {switch: false}
  let diff = 0;
  function handleScrollTop(e) {
    console.log(e.target)
    let back = document.getElementsByClassName("back");
    let scroll = e.target.scrollTop;
    
    back[0].scrollTop = scroll;
  }



  function handleInput() {
      diff += 1;
        setDiffRate(diff)
  }


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
          i += 1
          element =  <>{element}{secondText.charAt(i)}</>          
          
          
        }
          
          if(secondText.charAt(i) !== firstText.charAt(z)){
              element =  <>{element}<mark>{secondText.charAt(i)}</mark></>     
              console.log("Z ON THIS POINT " + z);
              console.log("I ON THIS POINT " + i);  
            diff += 1;


          }
          else {
            element =  <>{element}{secondText.charAt(i)}</>          
          }
        
        
      }
      console.log("i " + i);
      console.log("z " + z)
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
          <label>check Whitespace</label>
          <Switch flipSwitch={(getTrim) => setTrim(getTrim)} defaultValue={getTrim}></Switch>
          <label>check Capital Case</label>

          <Switch flipSwitch={(getCapital) => setCapital(getCapital)} defaultValue={getCapital}></Switch>
        </div>
        <div className='subContainer'>
          <div className='back'>
            <div id='highlight' className="highlights">
                {calculate()[0]}
            </div>
          </div>
          <textarea className='secondTextArea' onChange={(e) => {setSecondText(e.target.value)}} onScroll={(e) => handleScrollTop(e)} value={getSecondText}></textarea>
        </div>
        <textarea className='firstTextArea' onChange={(e) => {setFirstText(e.target.value)}} value={getFirstText}></textarea>
      </div>

    </div>
  );
}

export default App;
