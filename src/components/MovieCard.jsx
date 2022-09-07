import React from 'react'
import { setFavMovie, deleteFavMovie } from '../idb/indexedDB';

export default function MovieCard({movies, bntFav}) {

  const addFavorite = ({ target }, movie) =>{
    if (target.textContent === 'add to fav') {
      setFavMovie(movie.imdbID, movie);
      target.textContent = 'Remove from fav';
      target.classList.add('red-button');
    } else {
      deleteFavMovie(movie.imdbID);
      target.textContent = 'add to fav';
      target.classList.remove('red-button');
    }
  }

  const removeFavorite = ( movie) =>{
    deleteFavMovie(movie.imdbID);
  }

  return (
    <section className="display-container" id="display" >
      {movies.map((movie) => 
        <div className="display-div" key={movie.imdbID}>
          <div className="card">
            <div className="div-flex">
              <img src={movie.Poster} alt={movie.Title}/>
            </div>
            <div className="div-flex">
              <h2>{movie.Title}</h2>
              <h3>{movie.Year}</h3>
              <div>
                <h3>Ratings values from various sources</h3>
                {/* <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul> */}
              </div>
              <p><span className="span-flex">Released Date: </span><span>{movie.Released}</span></p>
            </div>
          </div>
          {bntFav?
            <button className='fav-button red-button' onClick={() => removeFavorite(movie) }>Remove from fav</button>:
            <button className='fav-button green-button' onClick={() => addFavorite(movie) }>add to fav</button>
          }
        </div>
      )} 
    </section>
  )
}
