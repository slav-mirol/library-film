import React from "react";
import "./movie-details.css";

const MovieDetails = ({ movie }) => {
  const actors = movie.persons.filter(person => person.profession === "актеры");
  return (
    <div className="movie-details">
      <div className="detailsWrapper">
        <img className="image" src={movie.poster.url} alt="img of film" />
        <div className="info">
          <p className="title-of-film">{movie.name}</p>
          <p className="id">Рейтинг IMDB: {movie.rating.imdb}</p>
          <p className="param" style={{ marginTop: 0 }}>
            {movie.director}
          </p>
          <p className="title-param">Параметры</p>
          <PropsOfFilm nameParam="Год производства" value={movie.year} />
          <PropsOfFilm
            nameParam="Страна"
            value={movie.countries.map((elem) => elem.name).join(", ")}
          />
          <PropsOfFilm
            nameParam="Длительность"
            value={
              movie.isSeries
                ? movie.seriesLength + " мин."
                : movie.movieLength + " мин."
            }
          />
          <PropsOfFilm
            nameParam="Жанры"
            value={movie.genres.map((elem) => elem.name).join(", ")}
          />
          <div className="descriptionWrapper">
            <p>Описание</p>
            <p className="textDescription">{movie.description}</p>
          </div>
        </div>
      </div>

      <p>Актеры</p>
      <div className="personsWrapper">
        {actors.map((actor) => (
          <Person
            key={actor.id}
            name={actor.name}
            photo={actor.photo}
            description={actor.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;

const PropsOfFilm = ({ nameParam, value }) => {
  return (
    <div className="container-param">
      <p className="param">{nameParam}</p>
      <p className="param-value">{value}</p>
    </div>
  );
};

const Person = ({ name, photo, description }) => {
  return (
    <div className="container-person">
      <img className="person-image" src={photo} alt="img of person" />
      <div className="text-params-person">
        <p className="person-name">{name}</p>
        <p className="person-description">{description}</p>
      </div>
    </div>
  );
};