import React, { useContext, useEffect, useState } from "react";
import "../styles/Form.css";
import { useLocation, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import { Heading, Input } from "@chakra-ui/react";
import Header from "../components/Header";

const FormScreen = () => {
  const { setClienteId, setClientInfo, clientInfo } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Acessando o estado passado
  const stateLocation = location.state;

  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    telefone: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (clientInfo) {
      setFormData({
        nome: clientInfo.nome,
        telefone: clientInfo.telefone,
        endereco: clientInfo.endereco,
      });
    }
  }, [clientInfo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      nome: formData.nome,
      endereco: formData.endereco,
      telefone: formData.telefone,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    fetch(
      "https://localhost:7063/v1/Clientes/confirmar-dados-cliente",
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setClienteId(data.id);
        setClientInfo(data);
      });

    if (stateLocation?.fromProfileButton) navigate("/Meus-pedidos");
    else navigate("/Finalizar");
  };

  return (
    <div>
      <Header title={"Cardápio"} showProfileIcon={false} />
      <div className="form_container">
        <Heading as="h2" size="lg" noOfLines={1}>
          Confirme seus dados
        </Heading>
        <form onSubmit={handleSubmit}>
          <div className="div_container">
            <div className="input_container">
              <Input
                placeholder="Nome"
                color="black"
                bgColor="white"
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
              />
            </div>
            <div className="input_container">
              <Input
                placeholder="Endereço"
                color="black"
                bgColor="white"
                type="text"
                id="endereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
              />
            </div>
            <div className="input_container">
              <Input
                placeholder="Telefone"
                color="black"
                bgColor="white"
                type="text"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button type="submit" className="button_form">
            Confirmar Dados
          </button>
        </form>
        <button
          type="button"
          className="button_form"
          onClick={() => navigate("/Carrinho")}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default FormScreen;
