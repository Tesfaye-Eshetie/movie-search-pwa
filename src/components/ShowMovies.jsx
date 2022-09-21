import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ShowMovies.css";

export default function ShowMovies() {
  const [movies, setMovies] = useState([]);

  const BASE_URL = import.meta.env.VITE_API_URL;
  const POSTER_PATH = import.meta.env.VITE_IMG_PATH;

  const getMovies = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      const { results } = data;
      setMovies(results);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  function getClassByRate(vote) {
    if (vote >= 8) {
      return "green";
    }
    if (vote >= 5) {
      return "orange";
    }
    return "red";
  }

  return (
    <section className="display-main">
      <div className="main" id="main-page">
        {movies.map((movie) => (
          <div className="movie" key={movie.id}>
            <img src={POSTER_PATH + movie.poster_path} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <span className={getClassByRate(movie.vote_average)}>
                {movie.vote_average}
              </span>
            </div>
            <div className="overview">
              <h3>Overview</h3>
              {movie.overview}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
