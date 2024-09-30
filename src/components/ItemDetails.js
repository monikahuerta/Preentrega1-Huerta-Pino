import React from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';

function ItemDetail({ item }) {
    return (
        <div className="item-detail">
            <img src={`/images/${item.image}.jpg`} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <ItemQuantitySelector />
            <AddItemButton item={item} />
        </div>
    );
}

export default ItemDetail;