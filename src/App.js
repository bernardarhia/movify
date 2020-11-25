import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  RiMovie2Line,
  RiMoonFill,
  RiSunFill,
  RiMenu4Line,
} from "react-icons/ri";
import Favorite from "./components/Favorite";
import Loader from "./components/Loader";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [ loading, setLoading] = useState(false)
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
    // get the movies
  }, [darkMode]);
  // setDarkMode(darkLightMode)
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sendSearchData = (e) => {
    if (e.key === "Enter" && e.target.value !== '') {
      setSearch(e.target.value)
      e.target.value = ''
      setLoading(true)
    }
  };
  return (
    <>
      <div className="gallery-container">
        <Router>
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
                <input
                  type="text"
                  placeholder="Search for a movie"
                  name="search"
                  // onKeyPress={sendSearchData}
                />
                {search}
              </div>
              <div className="icons">
                <div
                  className="dark__mode"
                  onClick={() => setDarkMode(Boolean(!darkMode))}
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
          <Switch>
            {loading ? <Loader /> : <Route
              path="/"
              exact
              render={(props) => <Home {...props} search={search} setLoading={setLoading} />}
            />}
            <Route path="/movie_details/:id" exact component={MovieDetails} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
