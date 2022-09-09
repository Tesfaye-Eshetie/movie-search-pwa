import React, {useState} from 'react'
import { database, setFavMovie, deleteFavMovie } from '../idb/indexedDB';


export default function AddFavortite({movie}) {
  const [isFavorite, setIsFavorite] = useState(false);

  (async () => {
    (await database).getAll('favoriteMovie')
      .then(data => {
        const isFav =data.map(d => d.imdbID).includes(movie.imdbID);
        setIsFavorite(isFav);
      } )
  })();

  const getSearchMovie = async () => {
    (await database).get('searchMovie', 'search')
      .then(data => {
        setFavMovie(data.imdbID, data);
      } )
  };

  const addFavorite = () =>{
    getSearchMovie();
    window.location.reload();
  }
    
  const removeFavorite = ( movie) =>{
    deleteFavMovie(movie.imdbID);
    window.location.reload();
  }

  
  return (
    <>
      {
        isFavorite ? 
          <button className='fav-button red-button' onClick={() => removeFavorite(movie) }>Remove from fav</button> :
          <button className='fav-button green-button' onClick={addFavorite}>add to fav</button>
      }
    </>
  )
}
