import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const products = [
          { id: 1, name: 'Sombras', price: 15, image: 'sombras1' },
          { id: 2, name: 'Labiales', price: 12, image: 'labial1' },
          { id: 3, name: 'Serums', price: 25, image: 'serum1' }
        ];
      
        console.log(products.map(p => p.image));
        setItems(products);
      }, []);         

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;