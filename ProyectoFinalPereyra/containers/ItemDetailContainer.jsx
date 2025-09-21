import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { items as itemsService } from '../services/item';
import ItemDetail from '../presentation/ItemDetail';
import { useCart } from '../src/context/CartContext';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart, isInCart } = useCart();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const foundItem = await itemsService.getById(id);

         if (foundItem) {
          setItem(foundItem);
        } else {
          setError('Producto no encontrado');
        }

        
      } catch (err) {
        console.error('Error fetching item:', err);
        setError('Error al cargar el producto');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchItem();
    }
  }, [id]);

  const handleAddToCart = (quantity) => {
    if (item) {
      addToCart(item, quantity);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div>Cargando producto...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div>{error}</div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="loading-container">
        <div>Producto no encontrado</div>
      </div>
    );
  }

  return (
    <ItemDetail 
      item={item} 
      onAddToCart={handleAddToCart}
      isInCart={isInCart(item.id)}
    />
  );
};

export default ItemDetailContainer;
