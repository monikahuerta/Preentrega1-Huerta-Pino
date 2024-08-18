import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">4</span> {/* Número de elementos en mi carrito */}
    </div>
  );
};

export default CartWidget;
