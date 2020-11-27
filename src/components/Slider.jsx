import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import MovieSkeleton from "./MovieSkeleton";

const Slider = ({ movies }) => {
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
        // itemClass="carousel-item-padding-40-px"
      >
        {movies.length > 0 &&
          movies.map((movie) => {
            return (
              <div key={movie.id} className="slider__Card">
                <Link
                  to={`/movie_details/${movie.id}`}
                  style={{
                    display: "block",
                    width: "100%",
                  }}
                >
                  <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt=""/>
                </Link>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Slider;
