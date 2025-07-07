import { useState } from "react";
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    console.log("toggle mode clicked " + mode);
    if (mode === 'dark') {
      console.log("inside Dark mode");
      setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        // document.title = "TextUtils - Light Mode";
        }
    else {
      console.log("inside Light mode")
      setMode('dark');
        document.body.style.backgroundColor = '#042743';
        document.body.style.color = 'white';
        // document.title = "TextUtils - Dark Mode";
     }
  }   
  return (
    <>
      
      <Navbar title="TextUtils" homeText = "Home" mode = {mode} toggleMode = {toggleMode}/>
      <TextForm title="Enter the text to analyze below" mode= {mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
