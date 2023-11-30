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
import Header from '../components/Header';

const MenuScreen = () => {
  const [salgados, setSalgados] = useState([]);

  const fetchSalgadosData = () => {
    fetch("https://localhost:7063/v1/Admin/obter-salgados-ativos")
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
    kibe,
    enroladinho_salsicha,
    empada_frango,
    coxinha,
    croissant,
    pastel_assado,
  ];

  return (
    <div>
      <Header />
      <div className="div-container">
        <div className="menu-container">
        {salgados.map((item, index) => (
          <MenuCard key={index} {...item} imagem={imagens[index]} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
