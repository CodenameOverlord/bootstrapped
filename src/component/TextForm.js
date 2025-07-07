import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    // setText("You have clicked on the button to convert text to uppercase");
    setText(text.toUpperCase()); // Converts the current text to uppercase and updates the state
  };
    const handleOnChange = (event) => {
        setText(event.target.value);    // Updates the text state with the value from the textarea
        console.log(event.target.value); // Logs the current value of the textarea
    console.log("Uppercase On change");
  };
  const handleLowerClick = ()=>{
    setText(text.toLowerCase()); // Converts the current text to lowercase and updates the state    
    // console.log("Lowercase was clicked");
    // setText("You have clicked on the button to convert text to lowercase");
  }
  const handleClearText = () => {
    setText(""); // Clears the text state
    // console.log("Clear Text was clicked");
    // setText("You have clicked on the button to clear the text");
  };
  const handleCopyText = () => {
    navigator.clipboard.writeText(text); // Copies the current text to the clipboard
  }
  const [text, setText] = useState("Enter alphanumeric text here");
  return (
    <>
      <div className="container">
        <h1>{props.title}</h1>
        <div className="mb-3"></div>
        <textarea

          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{ backgroundColor: props.mode==='dark'?'lightblue':
            'white', color: 'black' }}
        ></textarea>
        <button
          className="btn btn-primary  my-2"
          onClick={handleUpClick}
        >Convert to Uppercase</button>   
        <button
          className="btn btn-primary mx-2"
          onClick={handleLowerClick}
        >Convert to LowerCase</button>   
        <button
          className="btn btn-primary mx-2"
          onClick={handleClearText}
        >Clear Text</button>   
        <button
          className="btn btn-primary mx-2"
          onClick={handleCopyText}
        >Copy Text</button> 
      </div>

      <div className="Container my-3">
        <h2>Your text summary</h2>
        <p>The text is of {text.split(" ").length} words and {text.length} characters</p>
        <p>Average time to read the text is {text.length*0.008} minutes</p>
        <h2>Preview</h2>               
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>


      </div>
    </>
  );
}
