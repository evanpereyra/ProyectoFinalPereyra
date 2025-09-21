import React, { useState, useEffect } from 'react';

function ItemCount({ stock, initial = 1, onAdd, showAddButton = true }) {
  const [qty, setQty] = useState(initial);

  useEffect(() => {
    setQty(initial);
  }, [initial]);

  const inc = () => {
    
    setQty(q => Math.min(q + 1, stock));
  };

  const dec = () => {
    
    setQty(q => Math.max(q - 1, 1));
  };

  const handleAdd = () => {
    console.log("valor", stock, qty)
    if (onAdd && qty > 0 && qty <= stock) {
      onAdd(qty);
    }
  };

  if (stock <= 0) {
    return (
      <div className="item-count-no-stock">
        Producto sin stock
      </div>
    );
  }

  return (
    <div className="item-count-container">
      <button 
        onClick={dec} 
        aria-label="disminuir"
        disabled={qty <= 1}
        className="item-count-button"
      >
        -
      </button>
      
      <div className="item-count-display">
        {qty}
      </div>
      
      <button 
        onClick={inc} 
        aria-label="aumentar"
        disabled={qty >= stock}
        className="item-count-button"
      >
        +
      </button>
      
      {showAddButton && (
        <button 
          onClick={handleAdd} 
          disabled={qty <= 0 || qty > stock} 
          className="item-count-add-button"
        >
          Agregar al carrito
        </button>
      )}
      
      <div className="item-count-stock">
        Stock: {stock}
      </div>
    </div>
  );
}

export default ItemCount;