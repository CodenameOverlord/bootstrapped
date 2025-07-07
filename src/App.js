import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";

function App() {
  return (
    <>
      
      <Navbar title="TextUtils" homeText = "Home"/>
      {/* <TextForm title="Enter the text to analyze below" /> */}
      <About />
    </>
  );
}

export default App;
