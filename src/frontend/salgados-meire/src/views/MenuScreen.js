import React from "react";
import "../styles/MenuScreen.css";
import MenuCard from "../components/MenuCard";
import {
  coxinha,
  croissant,
  empada_frango,
  enroladinho_salsicha,
  kibe,
  pastel_assado,
} from "../assets/index.js";
import Footer from "../components/footer";

const MenuScreen = () => {
  const cardapio = [
    {
      titulo: "Enroladinho de Salsicha",
      descricao:
        "Farinha de trigo, salsicha, leite integral, ovo, fermento biológico, sal e açúcar. CONTÉM GLÚTEN. CONTÉM LACTOSE",
      imagem: enroladinho_salsicha,
    },
    {
      titulo: "Pastel Assado",
      descricao:
        "Farinha de trigo, ricota, carne, ovo, cebola e sal. Carne ou quejo. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
      imagem: pastel_assado,
    },
    {
      titulo: "Kibe",
      descricao:
        "Farinha de trigo, carne moída, ovo, sal e açúcar, fermento biológico, hortelã. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
      imagem: kibe,
    },
    {
      titulo: "Croissant",
      descricao:
        "Farinha de trigo, ovo, leite, açúcar e sal. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
      imagem: croissant,
    },
    {
      titulo: "Empada de Frango",
      descricao:
        "Farinha de trigo, frango, ovo, azeitona, cebola, caldo de galinha. CONTÉM GLÚTEN. CONTÉM LACTOSE.",
      imagem: empada_frango,
    },
    {
      titulo: "Coxinha de Frango",
      descricao: "Frango, farinha de trigo, ovo, cebola e caldo de galinha.",
      imagem: coxinha,
    },
  ];

  return (
    <div className="div-container">
      <h1>Cardápio</h1>
      <div className="menu-container">
        {cardapio.map((item, index) => (
          <MenuCard key={index} {...item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MenuScreen;
