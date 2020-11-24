import Axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Loader from "./Loader";
import Navbar from "./Navbar";

const MovieDetails = ({ match }) => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);

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
      console.log(video.data);
    };
    getMovieDetails();
  }, [match.params.id]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar disabled={true} />
          {movies && (
            <Container>
              <div className="movie__details">
                <div className="movie__details-container">
                  <div className="video__Player">
                    <iframe
                      title="movie"
                      src={`https://youtube.com/embed/${movies.videos.results[0].key}`}
                      frameBorder="0"
                      width="100%"
                      height="100%"
                    ></iframe>
                  </div>

                  <div className="content">
                    <h1 className="head">{movies.original_title}</h1>
                    <div className="para">
                      <p>{movies.overview}</p>
                    </div>
                    <div className="para">
                      <p><sup>""</sup>{movies.tagline}<sub>""</sub></p>
                    </div>
                  </div>
                </div>

                <div className="tags"></div>
              </div>
            </Container>
          )}
        </>
      )}
    </>
  );
};

export default MovieDetails;
