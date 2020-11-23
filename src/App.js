import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    const para = document.querySelector(".para p");
    const headings = document.querySelectorAll("h1");
    body.style.background = !darkMode ? "white" : "#000000ed";
    if (body.style.background === "rgba(0, 0, 0, 0.93)") {
      para.style.color = "#fff";
      headings.forEach((heading)=>{
        heading.style.color = "#fff";
      })
    } else {
      para.style.color = "#5e6971";
      headings.forEach((heading)=>{
        heading.style.color = "#36434d";
      })
    }
  }, [darkMode]);
  return (
    <>
      <div className="gallery-container">
        <Router>
          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <Hero />
          <Gallery />
        </Router>
      </div>
    </>
  );
}

export default App;
