import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">Colour Beauty</div>
      <ul className="nav-links">
        <li><a href="./ojos">Ojos</a></li>
        <li><a href="./labios">Labios</a></li>
        <li><a href="./skincare">Skincare</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;