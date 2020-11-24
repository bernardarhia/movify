import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
function App() {
 
  return (
    <>
      <div className="gallery-container">
        <Router>
         <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/movie_details/:id" exact component={MovieDetails} />
         </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
