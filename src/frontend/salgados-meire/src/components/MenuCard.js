import React from "react";
import "../styles/MenuCard.css";

const MenuCard = ({ nome, ingredientes, imagem }) => {
  return (
    <div className="menu-card">
      <img src={imagem} alt={nome} className="menu-card-img" />
      <div className="menu-card-info">
        <h3 className="menu-card-title">{nome}</h3>
        <p className="menu-card-description">{ingredientes}</p>
      </div>
    </div>
  );
};

export default MenuCard;
