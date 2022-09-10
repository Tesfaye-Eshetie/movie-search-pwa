import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'
import './Header.css'

export default function Header() {
  return (
    <>   
      <nav className='navbar'>
        <div className='navbar__logo'>
          <NavLink to={'/movie-search-pwa/'}><img src={Logo} alt='Logo' /></NavLink>
        </div>
        <ul className='navbar__items'>
          <li className='navbar__list'>
            <NavLink to={'/movie-search-pwa/search'} className='navbar__link'>Search</NavLink>
          </li>
          <li className='navbar__list'>
            <NavLink to={'/movie-search-pwa/favorite'} className='navbar__link'>Favorite</NavLink>
          </li>
          <li className='navbar__list'>
            <a href='#contact' className='navbar__link'>
						Contact
            </a>
          </li>
        </ul>
      </nav>
      <header id="header">
        <h1>Movies Lookup Site</h1>
      </header>
    </>
  );
}
