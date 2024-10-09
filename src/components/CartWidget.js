import React from 'react';

function CartWidget() {
  return (
    <div>
      <img src="/images/carrito.png" alt="Carrito" style={{ width: '30px' }} />
      <span>0</span> {/* Esto puede ser un contador de ítems */}
    </div>
  );
}

export default CartWidget;
