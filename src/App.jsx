import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import MainPart from "./components/Main";
import DateTimeDisplay from "./components/Date";

function App() {
  return (
    <div className="App">
      <div className="left-part">
        <Navigation />
      </div>
      <div className="right-part">
        <div className="right-part-header">
          {/* <p className="time">10:30 PM</p>
          <p className="date">Monday 3 Oct.</p> */}
          <DateTimeDisplay />
        </div>
        <MainPart />
      </div>
    </div>
  );
}

export default App;
