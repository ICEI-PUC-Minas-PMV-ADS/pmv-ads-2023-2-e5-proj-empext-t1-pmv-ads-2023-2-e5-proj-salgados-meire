import React from "react";
import "../styles/MenuCard.css";

const MenuCard = ({ titulo, descricao, imagem }) => {
  return (
    <div className="menu-card">
      <img src={imagem} alt={titulo} className="menu-card-img" />
      <div className="menu-card-info">
        <h3 className="menu-card-title">{titulo}</h3>
        <p className="menu-card-description">{descricao}</p>
      </div>
    </div>
  );
};

export default MenuCard;
