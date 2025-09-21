import React, { useEffect, useState } from 'react';
import { items as itemsService } from '../services/item';
import ItemList from '../presentation/ItemList';

function ItemListContainer({ saludo = "¡Bienvenido a MiTienda!" }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const querySnapshot = await itemsService.getAll().then(data => setProducts(data));
      
      } catch (err) {
        console.error('Error fetching items:', err);
        setError('Error al cargar los productos');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div>Cargando productos...</div>
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

  return (
    <section className="item-list-container">
      <h2 className="section-title">
        {saludo}
      </h2>
      <ItemList products={products} />
    </section>
  );
}

export default ItemListContainer;