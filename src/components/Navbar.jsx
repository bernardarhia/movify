import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  RiMovie2Line,
  RiMoonFill,
  RiSunFill,
  RiMenu4Line,
} from "react-icons/ri";
import Favorite from "./Favorite";
import localForage from 'localforage';

const Navbar = ({disabled}) => {
  const [darkMode, setDarkMode] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const history = useHistory()

  
 function checkDarkLightMode(){
  const getDarkLightMode =  localStorage.getItem('darkLightMode');
  if(!getDarkLightMode) {
    localStorage.setItem('darkLightMode','2');
  }

  const getDarkLightMode1 =  localStorage.getItem('darkLightMode');

  if(getDarkLightMode1 === '1') {
    setDarkMode(false)
  }else if(getDarkLightMode1 === '2'){
    setDarkMode(true)
  }
}

  useEffect(() => {
    checkDarkLightMode()
    // setting fonts colors
   const styler = ()=>{
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
   }

   styler()

  }, [ darkMode]);
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const sendSearchData = (e) => {
    if (e.key === "Enter" && e.target.value !== '') {
      setSearch(e.target.value)
      history.push({pathname:'/search_movie/search',state:{
        path:e.target.value
      }})
      e.target.value = ''
    }
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
          <input type="text" placeholder="Search for a movie" name="search" disabled={disabled} onKeyPress={sendSearchData} />
        </div>
        <div className="icons">
          <div
            className="dark__mode"
            onClick={  () =>{ 
              setDarkMode(!darkMode)
              const checkLightMode =  localStorage.getItem('darkLightMode');
              if(checkLightMode === '1'){
                localStorage.setItem('darkLightMode','2')
              }
              else if(checkLightMode === '2'){
                 localStorage.setItem('darkLightMode','1')
   
              }
            }}
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
