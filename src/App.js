import "./style.css"
import { useState } from "react";
function App() {
  const [getFirstText, setFirstText] = useState("");
  const [getSecondText, setSecondText] = useState("");
  const [getFinalText, setFinalText] = useState("");

  function compare(e) {
    let firstText = getFirstText;
    let secondText = e.toString();
    console.log(firstText.length);

    if(firstText.length > 0 && secondText.length > 0){
        for(let i = 0; i < secondText.length; i++){
            console.log("second letter = " + secondText.charAt(i));
            console.log("first letter = " + firstText.charAt(i));

            if(secondText.charAt(i) !== firstText.charAt(i)){
                let startPosition = i; //gives the letter back
                let finalText = secondText.substring(0,i) + "<span class='different'>" + secondText.substring(i,i + 1) + "</span>";
                setFinalText(finalText);
            }
        }
    }
    else {
      console.log(false)
    }
  }

  return (
    <div className="App">
      <h1>Text Compare</h1>
      <div className='container'>
        <div contentEditable="true" className='text' onInput={(e) => setFirstText(e.target.innerHTML)}></div>
        <div contentEditable="true" className='text' onInput={(e) => {setSecondText(e.target.innerHTML);compare(e.target.innerHTML)}}></div>
      </div>
    </div>
  );
}

export default App;
