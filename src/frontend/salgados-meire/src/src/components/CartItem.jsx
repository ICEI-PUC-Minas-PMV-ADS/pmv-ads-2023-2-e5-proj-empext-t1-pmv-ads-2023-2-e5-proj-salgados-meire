import React, { useContext, useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

import '../styles/CartItem.css';
import AppContext from '../context/AppContext';

function CartItem({ items }) {

  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, nome, valorUnitário, quantidade } = items;
  const [ preco, setPreco ] = useState(valorUnitário);

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const handlePrice = (e) => {
    const quantidade = e.target.value;
    const precoTotal = quantidade * valorUnitário; 

    setPreco(precoTotal);

    const newItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantidade: Number(quantidade)
        }
      } else return item
    })

    setCartItems(newItems);
  }

  return (
    <section className="cart-item">
      <div className="cart-item-content">
        <h3 className="cart-item-title">{nome}</h3>
        <h3 className="cart-item-price">{`R$ ${preco}`}</h3>
        <select defaultValue={quantidade} onChange={(e) => handlePrice(e)}>
          <option name="selectQuantity">Qntd</option>
          <option value={1}>{1}</option>
          <option value={2}>{2}</option>
          <option value={3}>{3}</option>
          <option value={4}>{4}</option>
          <option value={5}>{5}</option>
          <option value={6}>{6}</option>
          <option value={7}>{7}</option>
        </select>
        <button
          type="button"
          className="button__remove-item"
          onClick={ handleRemoveItem }
        >
          <BsFillTrashFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;