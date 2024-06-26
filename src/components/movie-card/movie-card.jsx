import React from "react";
import "./movie-card.css";

const MovieCard = ({
  movie,
  showMovie
}) => {
  return (
    <button
      className="movie-card"
      onClick={() => {
        showMovie(movie);
      }}
    >
      <p className="movie-title">{movie.name}</p>
      <div style={{ marginTop: 6, justifyContent: "start" }}>
        <p className="movie-props">
          {movie.year} | {movie.genres.map(elem => elem.name).join(", ")
          }
        </p>
      </div>
    </button>
  );
};

export default MovieCard;
