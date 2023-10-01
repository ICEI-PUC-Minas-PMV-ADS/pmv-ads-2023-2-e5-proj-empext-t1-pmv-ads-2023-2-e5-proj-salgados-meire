import React, { useState, useEffect } from "react";
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
  const [salgados, setSalgados] = useState([]);

  const fetchSalgadosData = () => {
    fetch("https://localhost:7063/api/Salgados")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSalgados(data);
      });
  };

  useEffect(() => {
    fetchSalgadosData();
  }, []);

  const imagens = [
    enroladinho_salsicha,
    pastel_assado,
    kibe,
    croissant,
    empada_frango,
    coxinha,
  ];

  return (
    <div className="div-container">
      <h1>Cardápio</h1>
      <div className="menu-container">
        {salgados.map((item, index) => (
          <MenuCard key={index} {...item} imagem={imagens[index]} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MenuScreen;
