import React from 'react'
import NoResult from './NoResult.jsx'
import Comment from './Comment.jsx';
import { setFavMovie, deleteFavMovie } from '../idb/indexedDB';
import ViewComment from './ViewComment.jsx';

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
      {movies.map((movie) => (
        movie.Response === 'False' && <NoResult key={movie.Response}/> ||
        movie.Response === 'True' && 
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
                  <ul>
                    {movie.Ratings.map(rating => (
                      <li key={rating.Source}>{rating.Source} : {rating.Value}</li>
                    ))
                    }
                  </ul>
                </div>
                <p><span className="span-flex">Released Date: </span><span>{movie.Released}</span></p>
                <p><span className="span-flex">Description: </span><span>{movie.Plot
                }</span></p>
                {
                  movie.comment && 
            <ViewComment viewComment={movie.comment} /> ||
            <Comment />
                }
              </div>
            </div>
            {
              bntFav &&
              <button className='fav-button red-button' onClick={() => removeFavorite(movie) }>Remove from fav</button> ||
              <button className='fav-button green-button' onClick={() => addFavorite(movie) }>add to fav</button>
            }
          </div>  
      ) 
      )} 
    </section>
  )
}
