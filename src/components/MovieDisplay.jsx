import React, {useState, useEffect} from 'react'
import {database} from '../idb/indexedDB'
import MovieCard from './MovieCard.jsx';
import './MovieDisplay.css'

export default function MovieDisplay() {
  const [movies, setMovies] = useState([]);
  
  const getSearchMovie = async () => {
    (await database).getAll('searchMovie')
      .then(data => {
        setMovies(data)
      } )
  };

  useEffect(()=> {
    getSearchMovie();
  },
  []);
  
  return (
    <MovieCard movies={movies} addFav/>
  )
}