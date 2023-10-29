import React, { useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

import '../styles/CartItem.css';
import AppContext from '../context/AppContext';

function CartItem({ items }) {

  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, nome, preco } = items;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <section className="cart-item">
      <div className="cart-item-content">
        <h3 className="cart-item-title">{nome}</h3>
        <h3 className="cart-item-price">{`R$ ${preco}`}</h3>
        <BsFillTrashFill color='red' onClick={ handleRemoveItem }/>
      </div>
    </section>
  );
}

export default CartItem;