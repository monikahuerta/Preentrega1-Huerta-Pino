import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartWidget() {
    const { cartQuantity } = useContext(CartContext);
    
    return (
        <div>
            <i className="fas fa-shopping-cart"></i>
            <span>{cartQuantity}</span>
        </div>
    );
}

export default CartWidget;

