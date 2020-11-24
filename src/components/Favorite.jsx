import React, { useState, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
const Favorite = ({ sidebarOpen, setSidebarOpen, darkMode }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [favoriteLoading, setFavoriteLoading] = useState(false);

  //  sidebar toggling
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const deleteFavorite = (item) => {
    const getFavoriteMovies = JSON.parse(
      localStorage.getItem("favoriteMovies")
    );
    const newFavorite = getFavoriteMovies.filter((data) => data.id !== item.id);
    setFavoriteMovies(newFavorite);
    localStorage.setItem("favoriteMovies", JSON.stringify(newFavorite));
  };
  useEffect(() => {
    const getFavoriteMovies = JSON.parse(
      localStorage.getItem("favoriteMovies")
    );
    // get favorite movies
    if (!getFavoriteMovies)
      localStorage.setItem("favoriteMovies", JSON.stringify([]));

    setInterval(() => {
      const retrieved = localStorage.getItem("favoriteMovies");
      setFavoriteMovies(JSON.parse(retrieved));
    }, 1000);
  }, [setFavoriteMovies]);

  return (
    <div
      className="favorite-container"
      style={{
        right: sidebarOpen ? "0" : "-200%",
        background: darkMode ? "#fff" : "#000",
      }}
    >
      <div className="close-favorite" onClick={handleSidebar}>
        <RiCloseLine fill={darkMode ? "#797979" : " #fff"} />
      </div>
      <h1
        style={{
          color: darkMode ? " #36434d" : "#fff",
          textAlign: "center",
          margin: "1rem 0",
        }}
      >
        Favorites
      </h1>

      <div className="favorite__lists">
        {favoriteMovies.length === 0 && (
          <h1 className="head" style={{ textAlign: "center" }}>
            No favorites found
          </h1>
        )}
        {favoriteMovies.length > 0 && (
          <ul>
            <p
              onClick={() =>
                localStorage.setItem("favoriteMovies", JSON.stringify([]))
              }
              style={{
                display: "flex",
                justifyContent: "flex-end",
                color: darkMode ? "#333" : "#fff",
                fontWeight: "600",
              }}
            >
              Remove all
            </p>
            {favoriteMovies.map((movie, index) => {
              return (
                <li key={movie.id}>
                  <div className="img">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt=""
                    />
                  </div>
                  <Link to="">{movie.original_title}</Link>
                  <div className="del" onClick={() => deleteFavorite(movie)}>
                    <VscChromeClose />
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Favorite;
