import React, { useState, useEffect } from "react";
import "../styles/MenuScreen.css";
import MenuCardAdmin from "../components/MenuCardAdmin";
import Header from "../components/Header";
import { Spinner } from "@chakra-ui/react";

const CatalogoAdmin = () => {
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
      <Header title={"Catálogo"} showProfileIcon={false} showCartIcon={false}/>
      {isLoading ? (
        <Spinner marginTop="200px" />
      ) : (
        <div className="div-container">
          <div className="menu-container">
            {salgados.map((item, index) => (
              <MenuCardAdmin key={index} {...item} imagem={item.imageUrl}/>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogoAdmin;
