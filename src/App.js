import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./Projects";

function App() {
  // const [resumeData, setResumeData] = useState({});

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Projects />
      </Router>
    </div>
  );
}

export default App;
