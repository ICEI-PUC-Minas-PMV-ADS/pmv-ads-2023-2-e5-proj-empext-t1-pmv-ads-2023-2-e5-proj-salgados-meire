import React, { useContext } from 'react';

import CartItem from '../components/CartItem';
import AppContext from '../context/AppContext';
import '../styles/Cart.css';

function Cart() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.preco + acc, 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        { cartItems.map((cartItem) => <CartItem key={cartItem.id} items={cartItem} />) }
      </div>

      <div className="cart-resume">{`TOTAL: R$ ${totalPrice}`}</div>
      <button type="button" onClick={() => setIsCartVisible(false)}>Continuar comprando</button>
    </section>
  );
}

export default Cart;