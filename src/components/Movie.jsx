import Axios from "axios";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import Loader from "./Loader";

import ShowMovie from "./ShowMovie";
import Slider from "./Slider";
import SuperSlider from "./SuperSlider";
const Movie = () => {
     const [movies, setMovies] = useState([]);
     const [upComingMovies, setupComingMovies] = useState([]);
    const [popular, setPopular] = useState([])
    const [page,setPage] = useState(1)


  useEffect(() => {
    const getMovies = async () => {
      const movieData = await Axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=77e8d7def6af64532e8616ab67f7735b&language=en-US&page='+page)
      const topRated = await Axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=77e8d7def6af64532e8616ab67f7735b&language=en-US&page=1')
      
      //   get upcoming movies
      const getUpComing = await Axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=77e8d7def6af64532e8616ab67f7735b&language=en-US&page='+page);
      
      if(movieData.data && getUpComing.data && topRated.data){
        setMovies(movieData.data.results);
        setupComingMovies(getUpComing.data.results)
        setPopular(topRated.data.results)
      }
    };
    getMovies();



  }, [page]);
  return (
    <>
     <>
         <SuperSlider movies={popular}/>
      <Container>
      <div className="movie__container">
        <div className="top__rating">


          <h1 className="head">Now showing</h1>

          <ShowMovie movies={movies}/>
        </div>



        <div className="up_coming">
            <h1 className="head" style={{margin:"3rem 0"}}>Up coming movies</h1>
            <ShowMovie movies={upComingMovies}/>
        </div>
      </div>

      <div className="prev">
          <button onClick={()=>{
             if(page === 1){
                 return;
             }
             setPage(page - 1);
          }} disabled={page===1 ? true : false}>Prev</button>
          <button onClick={()=>{
             setPage(page + 1);
          }}>Next</button>
      </div>
    </Container>
    </>
    
    </>
  );
};

export default Movie;
