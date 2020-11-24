import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Container from './Container';
import Navbar from './Navbar';

const MovieDetails = ({match}) => {
    const [movieDetails, setMovieDetails] = useState([])
    useEffect(() => {
        const getMovieDetails = async ()=>{
            const video = await Axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=77e8d7def6af64532e8616ab67f7735b&append_to_response=videos`);
            setMovieDetails(video.data)
        }
        getMovieDetails()
    },[match.params.id])
    return (
        <>
        <Navbar />
        <h1 className="head">Hello world</h1>
        <div className="para"><p>Hello world again</p></div>
        {movieDetails.length > 0 && movieDetails.map((movie)=>{
           console.log(movie.videos);
           return <Container>
               <p>hello again</p>
               <iframe src={`https://www.youtube.com/embed/${movie.videos.results.key}`} title={movie.results.original_title} width="400px" height="400px"></iframe>
           </Container>
        })}
        </>
    )
}

export default MovieDetails
