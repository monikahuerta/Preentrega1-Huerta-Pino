// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">Colour Beauty</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/category/ojos">Ojos</Link></li>
        <li><Link to="/category/labios">Labios</Link></li>
        <li><Link to="/category/skincare">Skincare</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
