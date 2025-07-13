import { useState } from "react";
import "./App.css";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    console.log("toggle mode clicked " + mode);
    if (mode === "dark") {
      console.log("inside Dark mode");
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark mode has been enabled", "success");
      setTimeout(() => {
        setAlert(null);
      }, 1500);
      // Uncomment the line below to change the document title when toggling modes
      // document.title = "TextUtils - Light Mode";
    } else {
      console.log("inside Light mode");
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    }
  };
  return (
    <>
      {/* <BrowserRouter>
            <Navbar
        title="TextUtils"
        homeText="Home"
        mode={mode}
        toggleMode={toggleMode}
      />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                title="Enter the text to analyze below"
                mode={mode}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */}
      <Navbar
        title="TextUtils"
        homeText="Home"
        mode={mode}
        toggleMode={toggleMode}
      />

      <TextForm
        showAlert={showAlert}
        title="Enter the text to analyze below"
        mode={mode}
      />
      <Alert alert={alert} />
    </>
  );
}

export default App;
