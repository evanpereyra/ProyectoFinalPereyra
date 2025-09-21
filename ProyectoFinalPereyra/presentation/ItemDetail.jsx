import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

function ItemDetail({ item, onAddToCart, isInCart }) {
  console.log("item", item)
  console.log("item", isInCart)
  if (!item) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail-image-container">
        <img 
          src={item.imagen || '/placeholder-image.jpg'} 
          alt={item.nombre}
          className="item-detail-image"
        />
      </div>
      
      <div className="item-detail-info">
        <h1 className="item-detail-title">
          {item.nombre}
        </h1>
        
        <p className="item-detail-price">
          ${item.precio}
        </p>
        
        <div className="item-detail-category">
          <strong>Categoría:</strong> {item.categoria}
        </div>
        
        <div className="item-detail-stock">
          <strong>Stock disponible:</strong> {item.stock || 0} unidades
        </div>
        
        <p className="item-detail-description">
          {item.descripcion}
        </p>
        
        {isInCart ? (
          <div className="item-added-notification">
            <p className="item-added-text">
              ✓ Producto agregado al carrito
            </p>
            <Link 
              to="/carrito" 
              className="item-added-link"
            >
              Ver carrito →
            </Link>
          </div>
        ) : (
          <ItemCount
            stock={item.stock || 0}
            initial={1}
            onAdd={onAddToCart}
            showAddButton={true}
          />
        )}
        
        <div className="back-link">
          <Link to="/">
            ← Volver al catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;