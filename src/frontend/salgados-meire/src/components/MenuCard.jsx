import React, { useContext } from 'react';
import "../styles/MenuCard.css";
import AppContext from '../context/AppContext';

const MenuCard = (items) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const { id, nome, ingredientes, imagem, preco } = items;

  const handleAddCart = () => setCartItems([ ...cartItems, items ]);

  return (
    <div className="menu-card" key={id}>
      <img src={imagem} alt={nome} className="menu-card-img" />
      <div className="menu-card-info">
        <h3 className="menu-card-title">{nome}</h3>
        <p className="menu-card-description">{ingredientes}</p>
        <p className="menu-card-price">{`Cento: R$ ${preco.toString()}`}</p>
        <button type="button" onClick={ handleAddCart }>Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

export default MenuCard;
