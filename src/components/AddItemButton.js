import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function AddItemButton({ item }) {
    const { addItemToCart } = useContext(CartContext);

    const handleClick = () => {
        addItemToCart(item, 1);
    };

    return (
        <button onClick={handleClick}>Añadir al carrito</button>
    );
}

export default AddItemButton;
