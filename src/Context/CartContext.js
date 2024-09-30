import React, { createContext, useState } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);

    const addItemToCart = (item, quantity) => {
        setCartItems([...cartItems, { ...item, quantity }]);
        setCartQuantity(cartQuantity + quantity);
    };

    return (
        <CartContext.Provider value={{ cartItems, cartQuantity, addItemToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;