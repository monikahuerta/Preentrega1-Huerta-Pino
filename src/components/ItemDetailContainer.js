import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const { productId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const product = { id: 1, name: 'Sombras', price: 15, description: 'Awesome shadows!', image: 'sombras' };
        setItem(product);
    }, [productId]);

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    );
}

export default ItemDetailContainer;