import React from 'react';
import { Link } from 'react-router-dom';

function Item({ item }) {
    return (
        <div className="item-card">
            <img src={`/images/${item.image}.jpg`} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>
            <Link to={`/product/${item.id}`}>Ver Detalles</Link>
        </div>
    );
}

export default Item;