import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../src/context/CartContext';

function Cart() {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    getTotalPrice, 
    clearCart 
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty-container">
        <h2>Tu carrito está vacío</h2>
        <p className="cart-empty-text">
          No tienes productos en tu carrito de compras.
        </p>
        <Link 
          to="/"
          className="cart-continue-link"
        >
          Continuar comprando
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito de Compras</h2>
      
      <div className="cart-items">
        {cartItems.map(item => (
          <div 
            key={item.id}
            className="cart-item"
          >
            <img 
              src={item.imagen || '/placeholder-image.jpg'} 
              alt={item.nombre}
              className="cart-item-image"
            />
            
            <div className="cart-item-info">
              <h4 className="cart-item-title">{item.nombre}</h4>
              <p className="cart-item-category">
                {item.categoria}
              </p>
              <p className="cart-item-price">
                ${item.precio} c/u
              </p>
            </div>
            
            <div className="cart-item-controls">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="cart-quantity-button"
              >
                -
              </button>
              
              <span className="cart-quantity-display">
                {item.quantity}
              </span>
              
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="cart-quantity-button"
              >
                +
              </button>
              
              <button
                onClick={() => removeFromCart(item.id)}
                className="cart-remove-button"
              >
                Eliminar
              </button>
            </div>
            
            <div className="cart-item-total">
              <strong>
                ${(item.precio * item.quantity).toFixed(2)}
              </strong>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="cart-total-info">
          <h3>
            Total: ${getTotalPrice().toFixed(2)}
          </h3>
          <p className="cart-total-count">
            {cartItems.reduce((total, item) => total + item.quantity, 0)} productos
          </p>
        </div>
        
        <div className="cart-actions">
          <button
            onClick={clearCart}
            className="cart-clear-button"
          >
            Vaciar carrito
          </button>
          
          <Link
            to="/checkout"
            className="cart-checkout-link"
          >
            Proceder al pago
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;