import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { categoryId } = useParams(); // corregido para obtener  parámetro categoryId desde la URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = [
        { id: 1, name: 'Producto 1', category: 'ojos' },
        { id: 2, name: 'Producto 2', category: 'labios' },
        { id: 3, name: 'Producto 3', category: 'skincare' },
      ];

      if (categoryId) {
        // Filtro productos por categoría
        const filteredProducts = allProducts.filter(product => product.category === categoryId);
        setProducts(filteredProducts);
      } else {
        // muestro productos si no hay categoria
        setProducts(allProducts);
      }
    };

    fetchProducts();
  }, [categoryId]); // 

  return (
    <div>
      <h1>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;


