import React, {useState, useEffect} from 'react'
import { database } from '../idb/indexedDB';
import NoResult from './NoResult.jsx'
import MovieCard from './MovieCard.jsx';
import './MovieDisplay.css'
import AddFavortite from './AddFavortite.jsx';

export default function MovieDisplay() {
  const [movie, setMovie] = useState([]);
  
  const getSearchMovie = async () => {
    (await database).get('searchMovie', 'search')
      .then(data => {
        setMovie(data)
      } )
  };

  useEffect(()=> {
    getSearchMovie();
  },
  []);
  
  
  return (
    <section className="display-container" id="display" >
      {
        movie.Response === 'False' && <NoResult key={movie.Response}/> ||
        movie.Response === 'True' && 
          <div className="display-div">
            <MovieCard movie={movie} store='searchMovie' id='search' />
            <AddFavortite movie={movie}/>
          </div>
        //       <button className='fav-button green-button' onClick={addFavorite}>add to fav</button>
        //       <button className='fav-button red-button display-none' onClick={() => removeFavorite(movie) }>Remove from fav</button>
      
      } 
    </section>
  )
}