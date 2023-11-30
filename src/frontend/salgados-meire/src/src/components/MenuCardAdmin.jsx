import React, { useState } from "react";
import "../styles/MenuCard.css";
import { InputGroup, InputLeftAddon, Input, useToast } from "@chakra-ui/react";

const MenuCardAdmin = (items) => {
  const toast = useToast();
  const { id, nome, descricao, valorUnitário, imageUrl } = items;
  const [novoValor, setNovoValor] = useState(valorUnitário);

  const handleValue = (event) => {
    event.preventDefault();
    const novoValorInteiro = parseInt(novoValor);

    const payload = {
      id,
      nome,
      descricao,
      valorUnitário: novoValorInteiro,
      imageUrl,
    };

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    fetch(
      `https://localhost:7063/v1/Admin/atualizar-salgado/${id}`,
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      })
      .then((data) => {
        setNovoValor(novoValorInteiro);
        toast({
          title: 'Sucesso!',
          description: "Alteração feita com sucesso!",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      });
  };

  return (
    <div className="menu-card" key={id}>
      <div className="menu-card-info">
        <h3 className="menu-card-title">{nome}</h3>
        <p className="menu-card-description">{descricao}</p>
        <p className="menu-card-price">{`Cento: R$ ${novoValor}`}</p>
        <InputGroup backgroundColor="white" borderRadius="20px" margin="7px">
          <InputLeftAddon children="R$:" />
          <Input
            type="tel"
            placeholder="Novo valor"
            onChange={(e) => setNovoValor(e.target.value)}
          />
        </InputGroup>
        <button
          type="button"
          className="button-card"
          onClick={(e) => handleValue(e)}
        >
          Alterar valor salgado
        </button>
      </div>
    </div>
  );
};

export default MenuCardAdmin;
