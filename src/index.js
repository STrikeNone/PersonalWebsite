import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./components/Home";
import About from "./components/About";
import Year1 from "./components/Year1";
import Year2 from "./components/Year2";
import Project from "./components/Project";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/year1" element={<Year1 />} />
        <Route path="/year2" element={<Year2 />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
