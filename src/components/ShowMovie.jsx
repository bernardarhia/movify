import React from "react";
import { RiHeartFill, RiPlayFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import {addToFavorite} from '../functions/addToFavorite'
const ShowMovie = ({ movies }) => {

  // add movie to favorites
 
  return (
    <>
      <div className="movie__container">
      <div className="rated">
        {movies.length > 0 &&
          movies.map((movie, index) => {
            return (
              <div className="rates" key={index}>
                <div className="img">
                  <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`:'https://www.pexels.com/photo/274937/download/?search_query=movie&tracking_id=9c5h6odcgud'}
                    alt=""
                  />
                  <div
                    className="rating"
                    style={{
                      background:
                        (movie.vote_average * 10).toFixed() > 50
                          ? "#00ff931f"
                          : "#e91e6333",
                      color:
                        (movie.vote_average * 10).toFixed() > 50
                          ? "#40b744"
                          : "#e91e63",
                    }}
                  >
                    {(movie.vote_average * 10).toFixed()}
                  </div>
                  <div className="layer">
                    <div className="player__container">
                      <Link to={`/movie_details/${movie.id}`}>
                      <RiPlayFill />
                      </Link>
                    </div>
                    <div className="fav">
                      <input type="checkbox" id={`check-${movie.id}`} />
                      <label htmlFor={`check-${movie.id}`} onClick={()=>addToFavorite(movie)}>
                        <RiHeartFill />
                      </label>
                    </div>
                  </div>
                </div>
                <p className="head">
                  {movie.name ? movie.name : movie.original_title}
                </p>
                <div
                  className="details"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#5e6971",
                    marginTop: ".5rem",
                  }}
                >
                  <div
                    className="release__date"
                    style={{ color: "#5e6971", marginTop: ".5rem" }}
                  >
                    {movie.release_date && movie.release_date.split("-")[0]}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      </div>
    </>
  );
};

export default ShowMovie;
