import React, {useState} from 'react'
// import SetMovie from './SetMovie.jsx';
import {setSearchMovie } from '../idb/indexedDB';
import axios from 'axios'

export default function Form(props) {
  const [searchInput, setSearchInput] = useState({});

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
    console.log(searchInput);
    const searchURL = `${baseURL}?t=${searchInput.title}&plot=Short&apikey=${APIKey}`
    getMovie(searchURL);  
    setSearchInput({});
  }

  return (
    <>
      <form className="form" action="/" onSubmit={handleSubmit}>
        <fieldset>
          <legend>By {props.legend}</legend>
          <div className="input-control">
            <div className="input-flex">
              <label className="label">{props.legend}:
                <input
                  type="text"
                  name='title'
                  value={searchInput.title || ''} 
                  onChange={handleChange}
                  placeholder={props.placeholder}
                />
              </label>
            </div>
            <div className="error">{props.required}</div>
          </div>
          {
            props.year && 
        <div className="input-control">
          <div className="input-flex">
            <label className="label">Year:
              <input
                type="number"
                name='year' 
                value={searchInput.year || ''} 
                onChange={handleChange}
                min="1928"
                max="2022"
                placeholder="Year..."
              />
            </label>       
          </div>
        </div>
          }
          <div className="input-control">
            <div id="input-flex">
              <label className="label">Plot:
                <select>
                  <option value="Short" selected>Short</option>
                  <option value="Full">Full</option>
                </select>
              </label>
            </div>
          </div>
          <button type="submit">Search</button>
        </fieldset>
      </form>
      {/* <SetMovie title={searchInput.title || ''}/> */}
    </>
  )
}
