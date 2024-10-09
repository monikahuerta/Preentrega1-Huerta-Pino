import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetails from './ItemDetails';

function ItemDetailContainer() {
    const { productId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const product = { id: 1, name: 'Sombras', price: 15, description: 'Sombras increíbles!', image: 'sombras' };
        setItem(product);
    }, [productId]);

    return (
        <div>
            {item && <ItemDetails item={item} />}
        </div>
    );
}

export default ItemDetailContainer;