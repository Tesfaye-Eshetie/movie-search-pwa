import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MovieCard from './MovieCard.jsx';
import './MovieDisplay.css'

export default function MovieDisplay() {
  const [movie, setMovie] = useState([]);

  const baseURL = 'https://www.omdbapi.com/'
  const APIKey = import.meta.env.VITE_APIKey
  const searchTerm = 'war'
  const plotValue = 'short'

  const getMovies = async() => {
    try {
      const {data} = await axios.get(`${baseURL}?t=${searchTerm}&plot=${plotValue}&apikey=${APIKey}`);
      setMovie(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(()=> {
    getMovies();
  },
  []);

  return (
    <MovieCard movie={movie} bntFav='' />
  )
}
