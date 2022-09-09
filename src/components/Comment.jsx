import React, {useState} from 'react'
import {database, setSearchMovie } from '../idb/indexedDB';

export default function Comment() {
  const [comment, setComment] = useState('');
  const [placeholder, setPlaceholder] = useState('Note about the movie...');

  const handleChange = (e) => {
    const value = e.target.value;
    setComment(value);
  }

  const getSearchMovie = async (input) => {
    (await database).getAll('searchMovie')
      .then(res => {
        res[0].comment = input;
        const data = res[0];
        setSearchMovie('search', data);
      } )
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const element = e.target;
    const InputElem = element.previousElementSibling;
    if (comment && comment !== '') {
      getSearchMovie(comment);
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
