import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function AddItemButton({ item, quantity }) {
    const { addItemToCart } = useContext(CartContext);

    const handleClick = () => {
        addItemToCart(item, quantity);
    };

    return (
        <button onClick={handleClick}>Añadir al carrito</button>
    );
}

export default AddItemButton;
