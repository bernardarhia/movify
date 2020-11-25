import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  RiMovie2Line,
  RiMoonFill,
  RiSunFill,
  RiMenu4Line,
} from "react-icons/ri";
import Favorite from "./Favorite";
const Navbar = ({disabled}) => {
  
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    // setting fonts colors
    
    const body = document.querySelector("body");
    const para = document.querySelector(".para p");
    const headings = document.querySelectorAll(".head");

    body.style.background = !darkMode ? "white" : "#000000ed";
    if (body.style.background === "rgba(0, 0, 0, 0.93)") {
      para.style.color = "#fff";
      headings.forEach((heading) => {
        heading.style.color = "#fff";
      });
    } else {
      para.style.color = "#5e6971";
      headings.forEach((heading) => {
        heading.style.color = "#36434d";
      });
    }


      // return ()=>{

      // }
    // get the movies
  }, [ darkMode]);
  // setDarkMode(darkLightMode)
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="navbar">
      <nav className="nav">
        <div className="logo">
          <Link to="/" className="logo-item">
            <span>
              <RiMovie2Line />
            </span>{" "}
            Movify 
          </Link>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search for a movie" name="search" disabled={disabled}/>
        </div>
        <div className="icons">
          <div
            className="dark__mode"
            onClick={ () => setDarkMode(Boolean(!darkMode))}
          >
            {!darkMode ? (
              <RiMoonFill fill="#797979" />
            ) : (
              <RiSunFill fill="#ffff34e1" />
            )}
          </div>
          <div className="favorite" onClick={handleSidebar}>
            <RiMenu4Line />
          </div>
        </div>
      </nav>
      <Favorite
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        darkMode={darkMode}
        style={{
          right: sidebarOpen ? "0" : "-100%",
        }}
      />
    </div>
  );
};

export default Navbar;
