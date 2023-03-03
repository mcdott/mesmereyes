import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className='Header'>
      <div className='Header-left'>
        <img
          src='logo.png'
          className='Header-logo'
          alt='logo'
          style={{ width: "260px", height: "260px" }}
        />
      </div>
      <nav className='Header-right'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/doodles'>Doodles</NavLink>
          </li>
          <li>
            <NavLink to='/full_screen_playlist'>Playlist</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
