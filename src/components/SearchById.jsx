import React, {useState} from 'react'
import {setSearchMovie } from '../idb/indexedDB';
import axios from 'axios'

export default function SearchById() {
  const [searchInput, setSearchInput] = useState({});
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearchInput(values => ({...values, [name]: value}))
  }

  const baseURL = 'https://www.omdbapi.com/'
  const APIKey = import.meta.env.VITE_APIKey

  const getMovie = async (url) => {
    try {
      const {data} = await axios(url);
      console.log(data);
      setSearchMovie('search', data );
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (searchInput.id && searchInput.id !== '') {
      getMovie(`${baseURL}?i=${searchInput.id }&plot=${searchInput.plot}&apikey=${APIKey}`);
    } else {
      setError('IMDB_ID is required...');
    }
    setSearchInput({});
  }

  return (
    <>
      <form className="form" action="/" onSubmit={handleSubmit}>
        <fieldset>
          <legend>BY IMDB-ID</legend>
          <div className="input-control">
            <div className="input-flex">
              <label className="label">ID:
                <input
                  type="text"
                  name='id'
                  value={searchInput.id || ''} 
                  onChange={handleChange}
                  placeholder="IMDB ID..."
                />
              </label>
            </div>
            <div className="error">{error}</div>
          </div>
          <div className="input-control">
            <div id="input-flex">
              <label className="label">Plot:
                <select name='plot' 
                  value={searchInput.plot || 'Short'} 
                  onChange={handleChange}>
                  <option value="Short">Short</option>
                  <option value="Full">Full</option>
                </select>
              </label>
            </div>
          </div>
          <button type="submit">Search</button>
        </fieldset>
      </form>
    </>
  )
}
