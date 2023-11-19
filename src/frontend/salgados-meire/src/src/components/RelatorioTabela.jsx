import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import moment from "moment";

const RelatorioTabela = (props) => {
  const { pedidos } = props;

  if (pedidos.length === 0) return "Sem resultados";

  const calcularValorTotalPedido = (itensPedidos) => {
    if (itensPedidos) {
      const total = itensPedidos.reduce((acc, curr) => {
        return (curr.valorUnitarioNaCompra * curr.quantidade) + acc;
      }, 0);
      return total;
    } return 0;
  }

  const calcularValorTotalMes = (pedidosPorMes) => {
    let total = 0;

    pedidosPorMes.forEach(pedido => {
      const totalItensPedido = calcularValorTotalPedido(pedido.itensPedido);
      total += totalItensPedido;
    });

    return total;
  }

  return (
    <TableContainer>
      <Table variant='simple'>
        <TableCaption>Relatório dos Pedidos</TableCaption>
        <Thead>
          <Tr>
            <Th>Data do pedido</Th>
            <Th></Th>
            <Th isNumeric>Valor total do pedido</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            pedidos.map((pedido) => (
              <Tr>
                <Td>{moment(pedido.dataPedido).format('DD-MM-YYYY')}</Td>
                <Td></Td>
                <Td isNumeric>R$ {calcularValorTotalPedido(pedido?.itensPedido)}</Td>
              </Tr>
            ))
          }
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Total do mês</Th>
            <Th></Th>
            <Th isNumeric>R$ {calcularValorTotalMes(pedidos)}</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

export default RelatorioTabela;