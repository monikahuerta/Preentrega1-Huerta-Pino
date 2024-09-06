// src/components/ItemDetailContainer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
      }, [itemId]);

  return (
    <div>
      {item ? (
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          {/* Mostrar más detalles del producto */}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
