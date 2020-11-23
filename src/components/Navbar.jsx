import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { RiMovie2Line, RiHeartFill,RiMoonFill, RiSunFill } from "react-icons/ri";
import Favorite from "./Favorite";

const Navbar = ({darkMode, setDarkMode, sidebarOpen, setSidebarOpen}) => {
  

    const handleSidebar = ()=>{
      setSidebarOpen(!sidebarOpen);
    }

 
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
            <input type="text" placeholder="Search for a movie" name="search"/>
        </div>
        <div className="icons">
           
            <div className="dark__mode" onClick={()=>setDarkMode(!darkMode)}>
                {!darkMode ? <RiMoonFill fill="#797979" />:<RiSunFill fill="#ffff34e1" />}
            </div>
            <div className="favorite" onClick={handleSidebar}>
                    <RiHeartFill />
            </div>
        </div>
      </nav>
      <Favorite sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} darkMode={darkMode}  style={{
           right: sidebarOpen ? '0':'-100%'
        }}/>
    </div>
  );
};

export default Navbar;
