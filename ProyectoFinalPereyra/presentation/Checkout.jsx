import React, { useState } from 'react';
import { useCart } from '../src/context/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../src/firebase';
import { order } from '../services/orden'
import { items } from '../services/item';

function Checkout() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    codigoPostal: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Crear la orden
      const orderData = {
        cliente: formData,
        items: cartItems,
        total: getTotalPrice(),
        fecha: serverTimestamp(),
        estado: 'pendiente'
      };

      // Guardar en Firestore
      const docRef =  await order.add(orderData)
      setOrderId(docRef.id); 


      // Limpiar carrito
      clearCart();
      
    } catch (err) {
      console.error('Error al crear la orden:', err);
      setError('Error al procesar la orden. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cartItems.length === 0 && !orderId) {
    return (
      <div className="checkout-empty-container">
        <h2>No hay productos en tu carrito</h2>
        <p>Agrega algunos productos antes de proceder al checkout.</p>
      </div>
    );
  }

  if (setIsSubmitting) {
      
      cartItems.map(element => {
        items.update(element.id, element.stock - element.quantity)
     
      });
     
  
  }

  if (orderId) {
    return (
      <div className="checkout-success-container">
        <div className="checkout-success-box">
          <h2 className="checkout-success-title">
            ¡Orden creada exitosamente!
          </h2>
          <p className="checkout-success-text">
            Tu orden ha sido procesada correctamente.
          </p>
          <div className="checkout-order-id">
            <strong>ID de la orden:</strong> {orderId}
          </div>
        </div>
        
        <p className="checkout-continue-text">
          Te enviaremos un email de confirmación con los detalles de tu compra.
        </p>
        
        <button
          onClick={() => window.location.href = '/'}
          className="checkout-continue-button"
        >
          Continuar comprando
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Finalizar Compra</h2>
      
      <div className="checkout-content">
        {/* Formulario */}
        <div className="checkout-form-section">
          <h3 className="checkout-form-title">Información de Envío</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="checkout-form-group">
              <label className="checkout-label">
                Nombre completo *
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                className="checkout-input"
              />
            </div>
            
            <div className="checkout-form-group">
              <label className="checkout-label">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="checkout-input"
              />
            </div>
            
            <div className="checkout-form-group">
              <label className="checkout-label">
                Teléfono *
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
                className="checkout-input"
              />
            </div>
            
            <div className="checkout-form-group">
              <label className="checkout-label">
                Dirección *
              </label>
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
                required
                className="checkout-input"
              />
            </div>
            
            <div className="checkout-form-row">
              <div className="checkout-form-group-inline">
                <label className="checkout-label">
                  Ciudad *
                </label>
                <input
                  type="text"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleInputChange}
                  required
                  className="checkout-input"
                />
              </div>
              
              <div className="checkout-form-group-inline">
                <label className="checkout-label">
                  Código Postal *
                </label>
                <input
                  type="text"
                  name="codigoPostal"
                  value={formData.codigoPostal}
                  onChange={handleInputChange}
                  required
                  className="checkout-input"
                />
              </div>
            </div>
            
            {error && (
              <div className="checkout-error">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="checkout-submit-button"
            >
              {isSubmitting ? 'Procesando...' : 'Confirmar Pedido'}
            </button>
          </form>
        </div>
        
        {/* Resumen del pedido */}
        <div className="checkout-summary-section">
          <h3 className="checkout-summary-title">Resumen del Pedido</h3>
          
          <div className="checkout-summary-box">
            {cartItems.map(item => (
              <div key={item.id} className="checkout-summary-item">
                <div>
                  <div className="checkout-summary-item-name">{item.nombre}</div>
                  <div className="checkout-summary-item-details">
                    {item.quantity} x ${item.precio}
                  </div>
                </div>
                <div className="checkout-summary-item-price">
                  ${(item.precio * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
            
            <div className="checkout-summary-total">
              <span>Total:</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

