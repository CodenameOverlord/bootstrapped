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
        ></textarea>
        <button
          className="btn btn-primary"
          onClick={handleUpClick}
        >Convert to Uppercase</button>   
      </div>
    </>
  );
}
