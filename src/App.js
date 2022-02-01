import "./style.css"
import { useState } from "react";
function App() {
  const [getFirstText, setFirstText] = useState("");
  const [getSecondText, setSecondText] = useState("");
  const [getFinalText, setFinalText] = useState("");

  function handleScrollTop(e) {
    console.log(e.target)
    let back = document.getElementsByClassName("back");
    let scroll = e.target.scrollTop;
    
    back.scrollTop = scroll;
  }



  function handleInput(text) {
    let highlight = document.getElementById("highlight");
    let firstText = getFirstText;
    let secondText = text.target.value;

    if(highlight.innerHTML === ""){
      highlight.innerHTML = secondText;
    }

      let finalText = "";
      for(let i = 0; i < secondText.length; i++){
          if(secondText.charAt(i) !== firstText.charAt(i)){
            finalText =  finalText + "<mark>" + secondText.charAt(i) + "</mark>";
          }
          else {
            finalText = finalText + secondText.charAt(i)
          }
        }
        
        highlight.innerHTML = finalText
      
       

  }
  return (
    <div className="App">
      <h1>Text Compare</h1>
      <div className='container'>
        <div className='subContainer'>
          <div className='back'>
            <div id='highlight' className="highlights">
              {/* {getFinalText} */}
            </div>
          </div>
          <textarea className='secondTextArea' onChange={(e) => handleInput(e)} onScroll={(e) => handleScrollTop(e)}></textarea>
        </div>
        <textarea className='firstTextArea' onChange={(e) => {setFirstText(e.target.value)}} onScroll={(e) => handleScrollTop(e)}></textarea>
      </div>

    </div>
  );
}

export default App;
