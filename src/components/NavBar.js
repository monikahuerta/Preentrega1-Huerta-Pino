import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Colour Beauty</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/sombras">Sombras</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/labiales">Labiales</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/serums">Serums</Link>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;
