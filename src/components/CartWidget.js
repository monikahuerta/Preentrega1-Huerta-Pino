import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function CartWidget() {
    const { cartQuantity } = useContext(CartContext);

    return (
        <div>
            <img src="/images/carrito.png" alt="Carrito" style={{ width: '30px' }} />
            <span>{cartQuantity}</span>
        </div>
    );
}

export default CartWidget;