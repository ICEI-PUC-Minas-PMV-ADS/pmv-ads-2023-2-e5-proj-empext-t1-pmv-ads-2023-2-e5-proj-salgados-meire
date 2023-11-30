import React, { useState, useEffect } from "react";
import "../styles/MeusPedidos.css";
import Header from "../components/Header";
import {
  CardBody,
  Card,
  CardHeader,
  Heading,
  Tag,
  Divider,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spinner
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";


const MeusPedidosAdmin = () => {
  const [pedidos, setPedidos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPedidosAdmin = () => {
    setIsLoading(true);
    fetch("https://localhost:7063/v1/Admin/obter-pedidos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPedidos(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getPedidosAdmin();
  }, []);

  const changeStatusPedido = (idPedido, status) => {
    fetch(`https://localhost:7063/v1/Admin/atualizar-status-pedido/${idPedido}/${status}`)
      .then((response) => {
        if (!response.ok) {
          alert("Erro ao atualizar Pedido");
        }
      }); 
      
      return Promise.resolve();
  };

  const parseData = (data) => {
    const ano = data.substr(0, 4);
    const mes = data.substr(5, 2);
    const dia = data.substr(8, 2);

    const dataFinal = `${dia}/${mes}/${ano}`;

    return dataFinal;
  };

  const status = {
    P: "Pendente",
    A: "Aceito",
    C: "Cancelado",
    E: "Em Preparo",
    S: "Saiu para entrega",
  };

  return (
    <div className="container_meus_pedidos">
      <Header title={"Meus Pedidos"} showProfileIcon={false} showCartIcon={false} />
      <div className="">
        <div className="menu-container_meus_pedidos">
          <div className="card__container">
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <Button colorScheme="blue" onClick={() => getPedidosAdmin()}>
                  Atualizar Página
                </Button>
                {pedidos.map((pedido, index) => (
                  <div key={index}>
                    <Card className="card">
                      <CardHeader>
                        <Heading size="md">
                          Data do pedido: {parseData(pedido.dataPedido)}
                        </Heading>
                      </CardHeader>
                      <Menu>
                        <MenuButton className="button-padrao" as={Button} rightIcon={<FaChevronDown />}>
                          Atualizar Pedido
                        </MenuButton>
                        <MenuList>
                          <MenuItem className="button-padrao" onClick={() => changeStatusPedido(pedido.id, "A")}>
                            {status.A}
                          </MenuItem>
                          <MenuItem className="button-padrao" onClick={() => changeStatusPedido(pedido.id, "C")}>
                            {status.C}
                          </MenuItem>
                          <MenuItem className="button-padrao" onClick={() => changeStatusPedido(pedido.id, "E")}>
                            {status.E}
                          </MenuItem>
                          <MenuItem className="button-padrao" onClick={() => changeStatusPedido(pedido.id, "P")}>
                            {status.P}
                          </MenuItem>
                          <MenuItem className="button-padrao" onClick={() => changeStatusPedido(pedido.id, "S")}>
                            {status.S}
                          </MenuItem>
                        </MenuList>
                      </Menu>
                      <CardBody>
                        <p>Status do pedido: <Tag>{status[`${pedido.status}`]}</Tag></p>
                        <p>{`Cliente: ${pedido.cliente.nome}`}</p>
                        <p>{`Endereço: ${pedido.cliente.endereco}`}</p>
                        <p>{`Telefone: ${pedido.cliente.telefone}`}</p>
                        <p>{`Data do pedido: ${parseData(pedido.dataPedido)}`}</p>
                        <p>{`Forma de Pagamento: ${pedido.formaPagamento}`}</p>
                        <Heading size="sm" padding="10px">
                          Itens do Pedido:
                        </Heading>
                        {pedido.itensPedido.map((item, index) => (
                          <div key={index}>
                            <p>{`Nome salgado: ${item.salgado.nome}`}</p>
                            <p>{`Quantidade: ${item.quantidade}`}</p>
                            <p>{`Valor Unitário: ${item.salgado.valorUnitário}`}</p>
                            <Divider className="divider" />
                          </div>
                        ))}
                        <Heading size="md" className="heading">
                          Total do pedido: R${" "}
                          {pedido.itensPedido.reduce(
                            (acc, item) =>
                              acc + item.valorUnitarioNaCompra * item.quantidade,
                            0
                          )}
                        </Heading>
                      </CardBody>
                    </Card>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )};  

export default MeusPedidosAdmin;
