import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Movie from "./components/Movie";
function App() {
 
  return (
    <>
      <div className="gallery-container">
        <Router>
          <Navbar
            // darkMode={darkMode}
            // setDarkMode={setDarkMode}
            // sidebarOpen={sidebarOpen}
            // setSidebarOpen={setSidebarOpen}
          />
          <Hero />
          <Movie />
        </Router>
      </div>
    </>
  );
}

export default App;
