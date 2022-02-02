import "./style.css"
import React, { useState } from "react";
import Switch from "./Switch";
function App() {
  const [getFirstText, setFirstText] = useState("");
  const [getSecondText, setSecondText] = useState("");
  const [getDiffRate, setDiffRate] = useState(0)
  const [getTrim, setTrim] = useState(false)
  const [getCapital, setCapital] = useState(false);  
  let diff = 0;
  function handleScrollTop(e) {
    console.log(e.target)
    let back = document.getElementsByClassName("back");
    let scroll = e.target.scrollTop;
    
    back[0].scrollTop = scroll;
  }



  function handleInput() {
    // let firstText = getFirstText;
    // let secondText = text.target.value.toString();

    // console.log(getFirstText);

      // let finalText = "";
      diff += 1;
      // for(let i = 0; i < secondText.length; i++){
      //     if(secondText.charAt(i) !== firstText.charAt(i)){
      //       finalText =  finalText + "<mark>" + secondText.charAt(i) + "</mark>";
      //       diff += 1;
      //     }
      //     else {
      //       finalText = finalText + secondText.charAt(i)
      //     }
      //   }
        setDiffRate(diff)
      //   ReactDOM.render(finalText,document.getElementById("highlight"))
       

  }

  function calculate() {
    let secondText = getSecondText;
    let firstText = getFirstText;
    if(!getCapital){
      firstText = firstText.toLowerCase();
      secondText = getSecondText.toLowerCase();
    }
    let element;
    for(let i = 0; i < secondText.length; i++){
      if(secondText.charAt(i) !== firstText.charAt(i)){
        // finalText =  finalText + (<mark>{secondText.charAt(i)}</mark>);
        // finalText =  finalText + markText;
       
        element =  <>{element}<mark>{secondText.charAt(i)}</mark></>
      }
      else {
        // finalText = finalText + secondText.charAt(i)
        element =  <>{element}{secondText.charAt(i)}</>
        
      }
    }
    return element;
  }
  return (
    <div className="App">
      <h1>Text Compare</h1>
      <div className='container'>
        <h2 className='difference'>Difference  {diff}</h2>
        <Switch></Switch>
        <div className='subContainer'>
          <div className='back'>
            <div id='highlight' className="highlights">
                {calculate()}
            </div>
          </div>
          <textarea className='secondTextArea' onChange={(e) => {setSecondText(e.target.value)}} onScroll={(e) => handleScrollTop(e)}></textarea>
        </div>
        <textarea className='firstTextArea' onChange={(e) => {if(getTrim){setFirstText(e.target.value.trim())}else{setFirstText(e.target.value)}}} value={getFirstText}></textarea>
      </div>

    </div>
  );
}

export default App;
