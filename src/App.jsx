import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { Header } from "./components/header/header";
import MovieDetails from "./components/movie-details/movie-details";
import MovieList from "./components/movies-list/movie-list";

function fetchAll() {
  const options = {
    method: 'GET', 
    headers: {
      accept: 'application/json',
      'X-API-KEY' :'EJG7YXT-WS8MAE0-GCRE8SV-4KS5QB9'
    }};
  return fetch('https://api.kinopoisk.dev/v1.4/movie/search?limit=50', options)
    .then((res) => res.json())
    .catch(() => alert("Error in fetch!"));
}

function fetchCurrentFilm(id) {
  const options = {
    method: 'GET', 
    headers: {
      accept: 'application/json',
      'X-API-KEY' :'EJG7YXT-WS8MAE0-GCRE8SV-4KS5QB9'
    }};
  return fetch(`https://api.kinopoisk.dev/v1.4/movie/${id}`, options)
    .then((res) => res.json())
    .catch(() => alert("Error in fetch!"));
}

const App = () => {
  
  const [movies, setMovies] = useState([]);
  const [curMovie, setCurMovie] = useState(undefined);

  useEffect(() => {
    fetchAll().then((res)=> {
      setMovies(res.docs);
    })
  }, []);

  const onSetCurrentMovie = useCallback((film) => {
    fetchCurrentFilm(film.id)
    .then((res) => setCurMovie(res));
  }, [])

  return (
    <div>
      <Header />
      <div className="main-content">
        <MovieList
          showMovie={onSetCurrentMovie}
          movies={movies}
          setMovies={setMovies}
        />
        {curMovie ? (
          <MovieDetails
            movie={curMovie}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default App;