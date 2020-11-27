import Axios from "axios";
import React, { useState, useEffect } from "react";
import Category from "./Category";
import Container from "./Container";
import MiniLoader from "./MiniLoader";
import MovieSkeleton from "./MovieSkeleton";
import ShowMovie from "./ShowMovie";
const Movie = ({ searchData }) => {
  const [movies, setMovies] = useState([]);
  const [upComingMovies, setupComingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      // get now playing movies
      const movieData = await Axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=77e8d7def6af64532e8616ab67f7735b&language=en-US&page=" +
          page
      );


      //   get upcoming movies
      const getUpComing = await Axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=77e8d7def6af64532e8616ab67f7735b&language=en-US&page=" +
          page
      );

      if (movieData.data && getUpComing.data) {
        setMovies(movieData.data.results);
        setupComingMovies(getUpComing.data.results);
        setLoading(false)
      }
      
    };
    getMovies();

   
    const categoryMovies = async () => {
      const search = await Axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=77e8d7def6af64532e8616ab67f7735b&with_genres=28,18`
      );
      if(search.data){
        setCategory(search.data.results)
        setLoading(false)
      }

    };

    categoryMovies();
  }, [page,searchData,setLoading]);
  return (
    <>
      <>
              <Container>
            <div className="movie__container">
              <div className="top__rating">
                <h1 className="head movie__header">Now showing</h1>

                <ShowMovie movies={movies} />
  {movies.length === 0 && <div className="shimmer">{[1,2,3,4].map((m, index)=><MovieSkeleton key={index}/>)}</div>}
              </div>
                <div className="category" style={{margin:"10rem 0"}}>
                  <Category movies={category} />
                  {category.length === 0 && <div className="shimmer">{[1,2,3,4].map((m,index)=><MovieSkeleton key={index}/>)}</div>}

                </div>
              <div className="up_coming">
                <h1 className="head movie__header" style={{ margin: "3rem 0" }}>
                  Up coming movies
                </h1>
                <ShowMovie movies={upComingMovies} />
                {upComingMovies.length === 0 && <div className="shimmer">{[1,2,3,4].map((m,index)=><MovieSkeleton key={index}/>)}</div>}

              </div>
            </div>
         

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
