import React,{useState} from "react";
import { RiHeartFill, RiPlayFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ShowMovie = ({ movies }) => {


  // add movie to favorites
  const addToFavorite = async (item)=>{
  // check if local storage has it already
  const getFavorite = JSON.parse(localStorage.getItem('favoriteMovies'))
  if(!getFavorite)localStorage.setItem('favoriteMovies',JSON.stringify([item]));

    
    const newData = JSON.parse(localStorage.getItem('favoriteMovies'));
    
    let idArrays = [];
    newData.map((data)=>idArrays.push(data.id))
  if(idArrays.includes(item.id)){
    alert(`${item.original_title} is already in favorites`)
    return;
  }else{
    const newItem = [...newData,item]
    localStorage.setItem('favoriteMovies',JSON.stringify(newItem));
  }

  
  }
  return (
    <>
      <div className="rated">
        {movies.length > 0 &&
          movies.map((item, index) => {
            return (
              <div className="rates" key={index}>
                <div className="img">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt=""
                  />
                  <div
                    className="rating"
                    style={{
                      background:
                        (item.vote_average * 10).toFixed() > 50
                          ? "#00ff931f"
                          : "#e91e6333",
                      color:
                        (item.vote_average * 10).toFixed() > 50
                          ? "#40b744"
                          : "#e91e63",
                    }}
                  >
                    {(item.vote_average * 10).toFixed()}
                  </div>
                  <div className="layer">
                    <div className="player__container">
                      <Link to={`/movie_details/${item.id}`}>
                      <RiPlayFill />
                      </Link>
                    </div>
                    <div className="fav">
                      <input type="checkbox" id={`check-${item.id}`} />
                      <label htmlFor={`check-${item.id}`} onClick={()=>addToFavorite(item)}>
                        <RiHeartFill />
                      </label>
                    </div>
                  </div>
                </div>
                <p className="head">
                  {item.name ? item.name : item.original_title}
                </p>
                <div
                  className="details"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#5e6971",
                    marginTop: ".5rem",
                  }}
                >
                  <div
                    className="release__date"
                    style={{ color: "#5e6971", marginTop: ".5rem" }}
                  >
                    {item.release_date && item.release_date.split("-")[0]}
                  </div>
                  {/* <div className="genres">hip pop</div> */}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ShowMovie;
