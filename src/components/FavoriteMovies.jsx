import React, {useState, useEffect} from 'react'
import {database} from '../idb/indexedDB'
import MovieCard from './MovieCard.jsx';
import './MovieDisplay.css'

export default function FavoriteMovies() {
  const [movies, setMovies] = useState([]);
  
  const getFavMovie = async () => {
    (await database).getAll('favoriteMovie')
      .then(data => {
        setMovies(data)
        console.log(data);
      } )
  };

  useEffect(()=> {
    getFavMovie();
  },
  []);

  return (
    <MovieCard movies={movies} bntFav='bntFav' />
  )
}
