import React from 'react';
import { Link } from 'react-router-dom'; 
import CartWidget from './CartWidget'; 
import './NavBar.css';


function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ojos">Ojos</Link>
        </li>
        <li>
          <Link to="/labios">Labios</Link>
        </li>
        <li>
          <Link to="/skincare">Skincare</Link>
        </li>
        <li>
          <CartWidget /> {/* El ícono del carrito */}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

