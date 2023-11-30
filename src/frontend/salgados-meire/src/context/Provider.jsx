import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [clienteId, setClienteId] = useState(null);
  const [clientInfo, setClientInfo] = useState(null);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    totalPrice,
    setTotalPrice,
    clienteId, 
    setClienteId,
    clientInfo,
    setClientInfo
  };

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;