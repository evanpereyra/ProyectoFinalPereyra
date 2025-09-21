import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../src/context/CartContext';

function CartWidget() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Link 
      to="/carrito"
      className="cart-widget"
    >
      <div className="cart-widget-content">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="m1 1 4 4 13 0 2 8-1 1H6"></path>
        </svg>
        
        <span>
          Carrito
        </span>
        
        {totalItems > 0 && (
          <span className="cart-badge">
            {totalItems > 99 ? '99+' : totalItems}
          </span>
        )}
      </div>
    </Link>
  );
}

export default CartWidget;