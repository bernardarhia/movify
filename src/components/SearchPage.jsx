import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Navbar from "./Navbar";
import Skeleton from "./Skeleton";

const SearchPage = ({ location, darkMode }) => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const searchMovies = async () => {
      const search = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=77e8d7def6af64532e8616ab67f7735b&language=en-US&query=${location.state.path}&page=1&include_adult=false`
      );
      if (search.data) {
        setSearchedMovies(search.data.results);
        setLoading(false);
      }
    };

    searchMovies();
  }, [location.state.path]);
  return (
    <>
      <Container>
        <h3 className="head">Search Results</h3>
        {loading ? (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => {
            return <Skeleton key={index} darkMode={darkMode} />;
          })
        ) : (
          <div className="search-results--container">
            {searchedMovies.length > 0 &&
              searchedMovies.map((searchedMovie, index) => {
                return (
                  <>
                    <Link
                      to={`/movie_details/${searchedMovie.id}`}
                      style={{ display: "block", textAlign: "initial" }}
                      key={index + searchedMovie.id}
                    >
                      <div className="result" key={index + searchedMovie.id}>
                        <div className="img">
                          <img
                            src={
                              searchedMovie.poster_path
                                ? `https://image.tmdb.org/t/p/w300/${searchedMovie.poster_path}`
                                : "https://www.pexels.com/photo/274937/download/?search_query=movie&tracking_id=9c5h6odcgud"
                            }
                            alt={`${searchedMovies.original_title}'`}
                          />
                        </div>
                        <div className="content">
                          <h4 className="head">
                            {searchedMovie.original_title}
                          </h4>
                          <div className="released__date">
                            <p>{searchedMovie.release_date}</p>
                          </div>
                          <div className="description">
                            <p style={{ color: "#aaa" }}>
                              {searchedMovie.overview
                                .split("")
                                .splice(0, 200 || 150)
                                .join("") + "..."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
          </div>
        )}
        {searchedMovies.length === 0 && (
          <h2 className="head">No results found</h2>
        )}
      </Container>
    </>
  );
};

export default SearchPage;
