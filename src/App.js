import React from "react";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
// import {
//   RiMovie2Line,
//   RiMoonFill,
//   RiSunFill,
//   RiMenu4Line,
// } from "react-icons/ri";
// import Favorite from "./components/Favorite";
import Loader from "./components/Loader";
import SearchPage from "./components/SearchPage";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(null);
  const [ loading, setLoading] = useState(false)
  
  
 



  // useEffect(() => {
  //  checkDarkLightMode();
   
  // }, []);
  
 
  return (
    <>
     <div className="head" style={{display:'none'}}></div>
        <div className="para" style={{display:'none'}}><p></p></div>
      <div className="gallery-container">
        <Router>
          <Navbar />
          <Switch>

            {loading ? <Loader /> : <Route
              path="/"
              exact
              render={(props) => <Home {...props}  />}
            />}
            <Route path="/movie_details/:id" exact component={MovieDetails} />
            <Route  path="/search_movie/search"
            exact
              render={(props) => <SearchPage {...props} setLoading={setLoading}  />} />
          </Switch>
          <Redirect from="*" to="/" strict />
        </Router>
      </div>
    </>
  );
}

export default App;
