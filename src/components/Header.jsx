import React from 'react';
import './Header.css'

export default function Header() {
  return (
    <>   
      <nav className='navbar'>
        <div className='navbar__logo'>
          <a href='index.html'>
            <img src='../../images/logo.png' alt='Logo' />
          </a>
        </div>
        <ul className='navbar__items'>
          <li className='navbar__list'>
            <a href='search.html' className='navbar__link'>
						Search
            </a>
          </li>
          <li className='navbar__list'>
            <a href='favorite.html' className='navbar__link'>
						Favorite
            </a>
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
