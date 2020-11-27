import Axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Slider from "./Slider";

const MovieDetails = ({ match }) => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([])
const  [color, setColor] = useState(null)
  const getRecommendations = async (id)=>{
    const recommended = await Axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=77e8d7def6af64532e8616ab67f7735b&language=en-US&page=1`);

    if(recommended.data){
      setRecommendations(recommended.data.results)
    }
    
  }
 

  useEffect(() => {
    const getMovieDetails = async () => {
      const video = await Axios.get(
        `https://api.themoviedb.org/3/movie/${
          match.params.id && match.params.id
        }?api_key=77e8d7def6af64532e8616ab67f7735b&append_to_response=videos`
      );

      if (video.data) {
        setMovies(video.data);
        setLoading(false);
      }
    };
    getMovieDetails();

  getRecommendations(match.params.id)
  
  const color = localStorage.getItem('darkLightMode');
  setColor(color)
  }, [match.params.id]);

 
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movies && (
            <Container>
                   
              <div className="movie__details">
                <div className="movie__details-container">
                  <div className="video__Player">
                    {movies.videos.results.length > 0 ? <iframe
                      title="movie"
                      src={`https://youtube.com/embed/${movies.videos.results[0].key}`}
                      frameBorder="0"
                      width="100%"
                      height="100%"
                    ></iframe> :<h1 style={{display:"flex",alignItems:"center",justifyContent:"center",height:'100%'}}>{movies.original_title} has no videos to display yet</h1>}
                  </div>
                  <div className="content">
                    {/* title */}
                    <div
                      className="head"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <h1 style={{ flex: 1 }}>{movies.original_title}</h1>
                      <span
                        style={{
                          fontWeight: "600",
                          color:
                            movies.status.toLowerCase() === "released"
                              ? "red"
                              : "green",
                        }}
                      >
                        {movies.status}
                      </span>
                    </div>
                    {/* overview */}
                    <div className="para">
                      <p>{movies.overview}</p>
                    </div>
                    {/* Tagline */}
                    {movies.tagline&& <div className="tagline">
                      <p>*** {movies.tagline} ***</p>
                    </div>
 }
                   
                    {/* genres */}

                    <div className="genres">
                      <ul>
                        {movies.genres.map((genre, index) => {
                          return (
                            <li key={index}>
                              {genre.name.toLowerCase() === "science fiction"
                                ? genre.name.split(" ")[1]
                                : genre.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    {/* released dates */}
                    <div className="released__date para">
                      <p style={{color:"#ccc"}}>released date: {movies.release_date}</p>
                    </div>
                  </div>
                </div>



                <Slider movies={recommendations} />
              </div>
            </Container>
          )}
        </>
      )}
    </>
  );
};

export default MovieDetails;
