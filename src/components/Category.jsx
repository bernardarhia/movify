import React from "react";
import { RiHeartFill, RiPlayFill } from "react-icons/ri";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { addToFavorite } from "../functions/addToFavorite";
const Category = ({ movies }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="movie__container">
      <h1 className="head"> Browsed by category</h1>
      <ul className="tags">
        {[{genre:'Action', emoji:'🔥'},{genre:'Fiction',emoji:'🤔'},{genre:'Romance',emoji:'❤️'},{genre:'Adventure',emoji:'🌳'},{genre:'Fantasy',emoji:'✨'}].map((genre,index)=>{
          return <li key={index} className="head">{genre.genre} <span>{genre.emoji}</span></li>
        })}
      </ul>
      <div className="slider">
        <Carousel
          responsive={responsive}
          draggable={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={6000}
          customTransition="all .5"
          transitionDuration={3000}
          containerClass="carousel-container"
        >
          {movies.length > 0 &&
            movies.map((movie, index) => {
              return (
                <>
                  <div className="cat__container">
                    <div className="img">
                      <img
                        src={
                          movie.poster_path
                            ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                            : "https://www.pexels.com/photo/274937/download/?search_query=movie&tracking_id=9c5h6odcgud"
                        }
                        alt=""
                      />
                    <div className="layer">
                      <div className="player__container">
                        <Link to={`/movie_details/${movie.id}`}>
                          <RiPlayFill />
                        </Link>
                      </div>
                      <div className="fav">
                        <input type="checkbox" id={`check-${movie.id+index+index+index}`} />
                        <label
                          htmlFor={`check-${movie.id+index+index+index}`}
                          onClick={() => addToFavorite(movie)}
                        >
                          <RiHeartFill />
                        </label>
                      </div>
                    </div>
                    </div>
                  </div>
                </>
              );
            })}
        </Carousel>
      </div>
    </div>
  );
};

export default Category;
