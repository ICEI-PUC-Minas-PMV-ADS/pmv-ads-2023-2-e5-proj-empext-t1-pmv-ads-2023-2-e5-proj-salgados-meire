import React, { useState, useEffect } from "react";
import "../styles/MenuScreen.css";
import MenuCard from "../components/MenuCard";
import Header from "../components/Header";
import { Spinner } from "@chakra-ui/react";

const MenuScreen = () => {
  const [salgados, setSalgados] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchSalgadosData = () => {
    setLoading(true);
    fetch("https://localhost:7063/v1/Admin/obter-salgados-ativos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSalgados(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchSalgadosData();
  }, []);

  return (
    <div>
      <Header title={"Cardápio"} showProfileIcon={true} />
      {isLoading ? (
        <Spinner marginTop="200px" />
      ) : (
        <div className="div-container">
          <div className="menu-container">
            {salgados.map((item, index) => (
              <MenuCard key={index} {...item} imagem={item.imageUrl} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuScreen;
