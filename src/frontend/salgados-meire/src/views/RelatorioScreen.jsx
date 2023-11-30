import { Card, CardBody, Select, Spinner, Text } from "@chakra-ui/react";
import Header from "../components/Header";

import "../styles/Relatorio.css";
import { useState } from "react";
import RelatorioTabela from "../components/RelatorioTabela";

const RelatorioScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pedidos, setPedidos] = useState([]);

  const months = [
    { value: 1, label: "Janeiro" },
    { value: 2, label: "Fevereiro" },
    { value: 3, label: "Março" },
    { value: 4, label: "Abril" },
    { value: 5, label: "Maio" },
    { value: 6, label: "Junho" },
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
    { value: 10, label: "Outubro" },
    { value: 11, label: "Novembro" },
    { value: 12, label: "Dezembro" },
  ];

  const obterDados = async (mes) => {
    fetch(`https://localhost:7063/v1/Admin/obter-relatorio/${mes}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPedidos(data);
      });
  };

  const onChangeMonthValue = async (mes) => {
    if (mes) {
      setPedidos([]);
      setIsLoading(true);
      await obterDados(mes);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <Header
          title={"Relatório"}
          showProfileIcon={false}
          showCartIcon={false}
        />
      </div>
      <div className="div-container">
        <div className="card_container">
          <Card>
            <CardBody className="card_body">
              <Text as="b">Selecione o mês:</Text>
              <div className="select_container">
                <Select
                  placeholder="Selecione o mês"
                  onChange={(e) => onChangeMonthValue(e.target.value)}
                >
                  {months.map((mes, index) => (
                    <option key={`${index}-${mes.value}`} value={mes.value}>
                      {mes.label}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="table_container">
                {isLoading ? (
                  <Spinner />
                ) : (
                  <RelatorioTabela pedidos={pedidos} />
                )}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default RelatorioScreen;
