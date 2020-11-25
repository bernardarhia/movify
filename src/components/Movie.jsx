import Axios from "axios";
import React, { useState, useEffect } from "react";
import Category from "./Category";
import Container from "./Container";
import ShowMovie from "./ShowMovie";
import SuperSlider from "./SuperSlider";
const Movie = ({ searchData, setLoading }) => {
  const [movies, setMovies] = useState([]);
  const [upComingMovies, setupComingMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await Axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=77e8d7def6af64532e8616ab67f7735b&language=en-US&page=" +
          page
      );
      const topRated = await Axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=77e8d7def6af64532e8616ab67f7735b&language=en-US&page=1"
      );

      //   get upcoming movies
      const getUpComing = await Axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=77e8d7def6af64532e8616ab67f7735b&language=en-US&page=" +
          page
      );

      if (movieData.data && getUpComing.data && topRated.data) {
        setMovies(movieData.data.results);
        setupComingMovies(getUpComing.data.results);
        setPopular(topRated.data.results);
      }
      
    };
    getMovies();

    // const searchMovies = async () => {
    //   // setInterval(()=>{
    //   //     set
    //   // },1000)
    //   const search = await Axios.get(
    //     `https://api.themoviedb.org/3/search/movie?api_key=77e8d7def6af64532e8616ab67f7735b&language=en-US&query=${searchData}&page=1&include_adult=false`
    //   );
    //   console.log(search.data.results);
    //   if(search.data){
    //     setSearchedMovies(search.data.results)
    //     setLoading(false)
    //   }
    // };

    // searchMovie();
    const categoryMovies = async () => {
      const search = await Axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=77e8d7def6af64532e8616ab67f7735b&with_genres=28,18`
      );
      if(search.data){
        setCategory(search.data.results)
      }
      console.log(search.data.results);
      // if(search.data){
      //   setSearchedMovies(search.data.results)
      //   setLoading(false)
      // }
    };

    categoryMovies();
  }, [page,searchData,setLoading]);
  return (
    <>
      <>
        {/* <SuperSlider movies={popular} /> */}
        <Container>
          {searchedMovies.length > 0 ? (
            <>
            <h1 className="head">Results ({searchedMovies.length})</h1>
            <ShowMovie movies={searchedMovies} />
            </>
          ) : (
            <div className="movie__container">
              <div className="top__rating">
                <h1 className="head">Now showing</h1>

                <ShowMovie movies={movies} />
              </div>
                <div className="category" style={{margin:"10rem 0"}}>
                  <Category movies={category} />
                </div>
              <div className="up_coming">
                <h1 className="head" style={{ margin: "3rem 0" }}>
                  Up coming movies
                </h1>
                <ShowMovie movies={upComingMovies} />
              </div>
            </div>
          )}

          <div className="prev">
            <button
              onClick={() => {
                if (page === 1) {
                  return;
                }
                setPage(page - 1);
              }}
              disabled={page === 1 ? true : false}
            >
              Prev
            </button>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Next
            </button>
          </div>
        </Container>
      </>
    </>
  );
};

export default Movie;
