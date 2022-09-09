import React from 'react'
import Comment from './Comment.jsx';
import ViewComment from './ViewComment.jsx';

export default function MovieCard({movie, store, id}) {

  return (
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
            <Comment store={store} id={id}/>
        }
      </div>
    </div>
  )
}
