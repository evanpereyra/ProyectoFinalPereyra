import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { CartProvider } from './context/CartContext';
import NavBar from '../components/NavBar';
import ItemListContainer from '../containers/ItemListContainer';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import Cart from '../presentation/Cart';
import Checkout from '../presentation/Checkout';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app-container">
          <NavBar />
          <main>
            <Routes>
              <Route 
                path="/" 
                element={<ItemListContainer saludo="¡Bienvenido a MiTienda!" />} 
              />
              <Route 
                path="/catalogo" 
                element={<ItemListContainer saludo="Catálogo de Productos" />} 
              />
              <Route 
                path="/item/:id" 
                element={<ItemDetailContainer />} 
              />
              <Route 
                path="/carrito" 
                element={<Cart />} 
              />
              <Route 
                path="/checkout" 
                element={<Checkout />} 
              />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;