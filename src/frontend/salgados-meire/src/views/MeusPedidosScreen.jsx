import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import {
  CardBody,
  Card,
  CardHeader,
  Heading,
  Tag,
  Divider,
  Button,
  Spinner,
} from "@chakra-ui/react";
import Header from "../components/Header";
import AppContext from "../context/AppContext";
import "../styles/MeusPedidos.css";

const MeusPedidosScreen = () => {
  const { clienteId } = useContext(AppContext);

  const [meusPedidos, setMeusPedidos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const compararDatas = (a, b) => {
    const dataA = new Date(a.dataPedido);
    const dataB = new Date(b.dataPedido);

    if (dataA > dataB) {
      return -1; // Ordena em ordem decrescente
    } else if (dataA < dataB) {
      return 1; // Ordena em ordem decrescente
    }
    return 0;
  };

  const getPedidos = async () => {
    setIsLoading(true);
    fetch(`https://localhost:7063/v1/Clientes/meus-pedidos/${clienteId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const emOrdem = data.sort(compararDatas);
        setMeusPedidos(emOrdem);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (clienteId) getPedidos();
    // eslint-disable-next-line
  }, []);

  const status = {
    P: "Pendente",
    A: "Aceito",
    C: "Cancelado",
    E: "Em Preparo",
    S: "Saiu para entrega",
  };

  const formaPagamento = {
    D: "Dinheiro",
    C: "Cartão na Entrega",
  };

  return (
    <div className="container_meus_pedidos">
      <Header title={"Meus Pedidos"} showProfileIcon={false} />
      <div className="">
        <div className="menu-container_meus_pedidos">
          <div className="card__container">
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <Button colorScheme="blue" onClick={getPedidos}>
                  Atualizar Página
                </Button>
                {meusPedidos.map((pedido) => (
                  <div key={pedido.id}>
                    <Card className="card">
                      <CardHeader>
                        <Heading size="md">
                          Data: {moment(pedido.dataPedido).format("DD-MM-YYYY")}
                        </Heading>
                      </CardHeader>
                      <CardBody>
                        <p>
                          Status do pedido:{" "}
                          <Tag>{status[`${pedido.status}`]}</Tag>
                        </p>
                        <Divider className="divider" />
                        <Heading size="sm">Detalhes do pedido:</Heading>
                        <p>
                          Forma de pagamento:{" "}
                          {formaPagamento[`${pedido.formaPagamento}`]}
                        </p>
                        {pedido.trocoPara > 0 && (
                          <p>Troco para: R$ {pedido.trocoPara}</p>
                        )}
                        <Heading size="sm" className="heading">
                          Itens do pedido:
                        </Heading>
                        {pedido.itensPedido.map((item) => (
                          <div key={item.id}>
                            <p>
                              {item.salgado.nome} x{item.quantidade} - R${" "}
                              {item.valorUnitarioNaCompra}
                            </p>
                          </div>
                        ))}
                        <Heading size="md" className="heading">
                          Total do pedido: R${" "}
                          {pedido.itensPedido.reduce(
                            (acc, item) =>
                              acc +
                              item.valorUnitarioNaCompra * item.quantidade,
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
  );
};

export default MeusPedidosScreen;
