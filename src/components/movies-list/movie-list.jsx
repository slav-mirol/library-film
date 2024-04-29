import React, {useEffect, useState} from "react";
import MovieCard from "../movie-card/movie-card";
import "./movie-list.css";
import useDebounce from "./useDebounce";



function fetchFilms(value) {
    const options = {
        method: 'GET', 
        headers: {
          accept: 'application/json',
          'X-API-KEY' :'EJG7YXT-WS8MAE0-GCRE8SV-4KS5QB9'
        }};
    return fetch(`https://api.kinopoisk.dev/v1.4/movie/search?query=${value}`, options)
    .then((res) => res.json())
    .catch(() => alert("Error in fetch!"));
}



const MovieList = ({
  showMovie,
  movies,
  setMovies,
  }) => {

    const [value, setValue] = useState('');  
    const {debounceValue} = useDebounce(value, 500)

  useEffect(() => {
    fetchFilms(value).then((res) => setMovies(res.docs));
  }, [debounceValue]);

  return (
    <div className="movies-list">
      <div className="search">
        <input
          className="input-search"
          id="input-search"
          placeholder="Введите название фильма"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="movies">
        {movies.length ?
          movies.map((elem) => (
            <MovieCard key={elem.id} movie={elem} showMovie={showMovie} />
          ))
        :
          null
        }
      </div>
      <div className="line"/>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className="found" style={{ marginLeft: 15 }}>
          <p className="found-text">Найдено {movies.length} фильмов</p>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
