import React, { useState, useEffect } from "react";
import "../styles/MenuScreen.css";
import MenuCardAdmin from "../components/MenuCardAdmin";
import Header from "../components/Header";
import { Input, InputGroup, InputLeftAddon, Spinner, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CadastroSalgadoScreen = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [urlImagem, setUrlImagem] = useState('');
  const [valor, setValor] = useState('');

  const cadastrarSalgado = async () => {
    const novoValorInteiro = parseInt(valor);

    const payload = {
      id: null,
      nome,
      descricao,
      valorUnitário: novoValorInteiro,
      imageUrl: urlImagem,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    fetch(
      `https://localhost:7063/v1/Admin/adicionar-salgado`,
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      })
      .then((data) => {
        navigate("/Admin/Catalogo")
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const emptyInputs = (nome === "" && descricao === "" && urlImagem === "" && valor === "");

    if (emptyInputs) {
      return toast({
        title: 'Campos vazios.',
        description: "Preencha as informações do salgado",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } else {
      cadastrarSalgado();
    }
  };

  return (
    <>
      <div>
        <Header title={"Cadastro de Salgados"} showProfileIcon={false} showCartIcon={false} />
      </div>
      <div className="div-container">
        <div className="menu-container">
          <div className="menu-card">
            <div className="menu-card-info">
              <p className="menu-card-price">Nome:</p>
              <InputGroup backgroundColor="white" borderRadius="20px" margin="7px">
                <Input
                  type="text"
                  placeholder="Nome do Salgado"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </InputGroup>
              <p className="menu-card-price">Descrição:</p>
              <InputGroup backgroundColor="white" borderRadius="20px" margin="7px">
                <Input
                  type="text"
                  placeholder="Descrição do Salgado"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </InputGroup>
              <p className="menu-card-price">URL da Imagem:</p>
              <InputGroup backgroundColor="white" borderRadius="20px" margin="7px">
                <Input
                  type="text"
                  placeholder="Link da imagem"
                  value={urlImagem}
                  onChange={(e) => setUrlImagem(e.target.value)}
                />
              </InputGroup>
              <p className="menu-card-price">Valor:</p>
              <InputGroup backgroundColor="white" borderRadius="20px" margin="7px">
                <InputLeftAddon children="R$:" />
                <Input
                  type="number"
                  placeholder="Valor do cento"
                  value={valor}
                  onChange={(e) => setValor(e.target.value)}
                />
              </InputGroup>
              <button
                type="button"
                className="button-card"
                onClick={(e) => handleSubmit(e)}
              >
                <p className="menu-card-price">Cadastrar</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CadastroSalgadoScreen;

