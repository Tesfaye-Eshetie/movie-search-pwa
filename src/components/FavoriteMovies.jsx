import React, {useState, useEffect} from 'react'
import {database} from '../idb/indexedDB'
import MovieCard from './MovieCard.jsx';
import AddFavortite from './AddFavortite.jsx';
import './MovieDisplay.css'

export default function FavoriteMovies() {
  const [movies, setMovies] = useState([]);
  
  const getFavMovie = async () => {
    (await database).getAll('favoriteMovie')
      .then(data => {
        setMovies(data)
      } )
  };

  useEffect(()=> {
    getFavMovie();
  },
  []);

  return (
    <section className="display-container" id="display" >
      {movies.map((movie) => (
        <div className="display-div" key={movie.imdbID}>
          <MovieCard movie={movie} store= 'favoriteMovie' id={movie.imdbID} />
          <AddFavortite movie={movie}/>
        </div>
      )
      )} 
    </section>
  )
}
