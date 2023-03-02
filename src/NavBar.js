import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className='NavBar'>
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
  );
}

export default NavBar;
