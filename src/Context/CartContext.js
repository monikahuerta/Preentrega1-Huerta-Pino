import React, { createContext, useState } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);

    const addItemToCart = (item, quantity) => {
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += quantity;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...item, quantity }]);
        }

        setCartQuantity(cartQuantity + quantity);
    };

    return (
        <CartContext.Provider value={{ cartItems, cartQuantity, addItemToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;