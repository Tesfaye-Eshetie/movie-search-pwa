import React, {useState} from 'react'
import {database, setSearchMovie, setFavMovie } from '../idb/indexedDB';

export default function Comment({store, id}) {
  const [comment, setComment] = useState('');
  const [placeholder, setPlaceholder] = useState('Note about the movie...');

  const handleChange = (e) => {
    const value = e.target.value;
    setComment(value);
  }

  const putComment = async (input) => {
    (await database).get(store, id)
      .then(data => {
        data.comment = input;
        if(store === 'searchMovie') {
          setSearchMovie('search', data);
        } else {
          setFavMovie(id, data);
        }       
      } )
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const element = e.target;
    const InputElem = element.previousElementSibling;
    if (comment && comment !== '') {
      putComment(comment);
      InputElem.classList.add('display-none');
      window.location.reload();
    } else {
      setPlaceholder('Input is missing?');
      InputElem.classList.add('red-input');
    }
  }

  return (
    <div className='display-note'>
      <textarea 
        value={comment} 
        onChange={handleChange}
        placeholder={placeholder}
      ></textarea>
      <button type="submit" onClick={handleSubmit}>Add Comment</button>
    </div>
  )
}
