import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const products = [
          { id: 1, name: 'Sombras', price: 15, image: '/images/sombras1.jpg' },
          { id: 2, name: 'Labiales', price: 12, image: '/images/labial1.jpg' },
          { id: 3, name: 'Serums', price: 25, image: '/images/serum1.jpg' }
        ];
      
        console.log(products.map(p => p.image)); // quiero que imprima las rutas de las imágenes
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