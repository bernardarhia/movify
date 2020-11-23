import Axios from "axios";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import localForage from "localforage";
import { RiHeartFill, RiPlayFill } from "react-icons/ri";
import ShowMovie from "./ShowMovie";
const Movie = () => {
     const [movies, setMovies] = useState([]);
     const [upComingMovies, setupComingMovies] = useState([]);
    const [popular, setPopular] = useState([])
    const [page,setPage] = useState(1)

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await Axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=77e8d7def6af64532e8616ab67f7735b&language=en-US&page='+page)
      // console.log(movieData);
    //   const data = await localForage.getItem("recommended");
      console.log(movieData.data.results);
      setMovies(movieData.data.results);

    //   get upcoming movies
      const getUpComing = await Axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=77e8d7def6af64532e8616ab67f7735b&language=en-US&page='+page);
      setupComingMovies(getUpComing.data.results)
      console.log(getUpComing.data);
    };
    getMovies();



  }, [page]);
  return (
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
  );
};

export default Movie;
