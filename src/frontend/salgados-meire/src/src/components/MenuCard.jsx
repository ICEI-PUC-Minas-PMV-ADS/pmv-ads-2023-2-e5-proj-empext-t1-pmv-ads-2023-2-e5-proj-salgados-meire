import React, { useContext } from 'react';
import "../styles/MenuCard.css";
import AppContext from '../context/AppContext';

const MenuCard = (items) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const { id, nome, descricao, imagem, valorUnitário } = items;

  const handleAddCart = () => {
    const inCart = cartItems.find((item) => item.id === id)
    if (inCart) {
      const newCartItems = cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantidade: item.quantidade + 1
          }
        } else return item
      })
      setCartItems(newCartItems)
    } else {
      const item = {
        ...items,
        quantidade: 1
      }
      setCartItems([...cartItems, item])
    }
  }

  return (
    <div className="menu-card" key={id}>
      <img src={imagem} alt={nome} className="menu-card-img" />
      <div className="menu-card-info">
        <h3 className="menu-card-title">{nome}</h3>
        <p className="menu-card-description">{descricao}</p>
        <p className="menu-card-price">{`Cento: R$ ${valorUnitário}`}</p>
        <button type="button" className="button-card" onClick={handleAddCart}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

export default MenuCard;
