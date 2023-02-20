import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className='Header'>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/doodles'>Doodles</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/signup'>Sign Up</NavLink>
          </li>
          <li>
            <NavLink to='/signin'>Sign In</NavLink>
          </li>
        </ul>
      </nav>
      <img
        src='logo.png'
        className='Header-logo'
        alt='logo'
        style={{ width: "100px", height: "100px" }}
      />
      <h1>Mesmereyes Accessible Gallery of Interactive Creations</h1>
      <h2>art to play with</h2>
    </header>
  );
}

export default Header;
