import React from 'react'
import NoResult from './NoResult.jsx'
import Comment from './Comment.jsx';
import { database, setFavMovie, deleteFavMovie } from '../idb/indexedDB';
import ViewComment from './ViewComment.jsx';

export default function MovieCard({movies, addFav, removeFav}) {

  const getSearchMovie = async () => {
    (await database).get('searchMovie', 'search')
      .then(data => {
        setFavMovie(data.imdbID, data);
      } )
  };
  
  const addFavorite = ({target}) =>{
    getSearchMovie();
    target.classList.add('display-none');
    target.nextElementSibling.classList.remove('display-none');
  }

  const removeFavorite = ( movie) =>{
    deleteFavMovie(movie.imdbID);
    window.location.reload();
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
              addFav &&
              <>
                <button className='fav-button green-button' onClick={addFavorite}>add to fav</button>
                <button className='fav-button red-button display-none' onClick={() => removeFavorite(movie) }>Remove from fav</button>
              </>
            }
            {
              removeFav &&
            <button className='fav-button red-button' onClick={() => removeFavorite(movie) }>Remove from fav</button>
            }
          </div>  
      ) 
      )} 
    </section>
  )
}
