import React, { useState } from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';

function ItemDetail({ item }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="item-detail">
            <img src={`/images/${item.image}.jpg`} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <ItemQuantitySelector quantity={quantity} setQuantity={setQuantity} />
            <AddItemButton item={item} quantity={quantity} />
        </div>
    );
}

export default ItemDetail;
