import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import Favorite from './pages/Favorite.jsx'
import NotFound from './pages/NotFound.jsx'


const Routers = () => (
  <>
    <Routes>
      <Route path="/movie-search-pwa/" element={<Home />} />
      <Route path="/movie-search-pwa/search" element={<Search />} />
      <Route path="/movie-search-pwa/favorite" element={<Favorite />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default Routers;