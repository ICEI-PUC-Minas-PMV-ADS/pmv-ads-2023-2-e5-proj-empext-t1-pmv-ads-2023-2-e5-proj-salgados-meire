import React from "react";
import { Circle, HStack, Center, Heading } from "@chakra-ui/react";
import { TbFileReport } from "react-icons/tb";
import { MdOutlineMenuBook } from "react-icons/md";
import { BiAddToQueue, BiMessageAltError } from "react-icons/bi";
import "../styles/Form.css";
import { useNavigate } from "react-router-dom";

const MenuAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className="form_container">
      <Heading as="h2" size="lg" noOfLines={1} padding="70px">
        Seja-Bem-Vindo!
      </Heading>
      <Center>
        <HStack>
          <div>
            <Circle
              onClick={() => navigate("/Admin/Catalogo")}
              marginRight={"70px"}
              size="110px"
              bg="#13ADC2"
              color="white"
            >
              <MdOutlineMenuBook size="80px" color="black" />
            </Circle>
            <Heading as="h6" size="lg" noOfLines={1} marginRight={"70px"}>
              Catálogo de Produtos
            </Heading>
          </div>
          <div>
            <Circle
              marginRight={"70px"}
              size="110px"
              onClick={() => navigate("/Admin/Relatorio")}
              bg="#13ADC2"
              color="white"
            >
              <TbFileReport size="80px" color="black" />
            </Circle>
            <Heading as="h6" size="lg" noOfLines={1} marginRight={"70px"}>
              Relatórios de Vendas
            </Heading>
          </div>
          <div>
            <Circle
              onClick={() => navigate("/Admin/Cadastro")}
              marginRight={"70px"}
              size="110px"
              bg="#13ADC2"
              color="white"
            >
              <BiAddToQueue size="80px" color="black" />
            </Circle>
            <Heading as="h6" size="lg" noOfLines={1} marginRight={"70px"}>
              Cadastrar Novo Produto
            </Heading>
          </div>
          <div>
            <Circle
              onClick={() => navigate("/Admin/Pedidos")}
              marginRight={"70px"}
              size="110px"
              bg="#13ADC2"
              color="white"
            >
              <BiMessageAltError size="80px" color="black" />
            </Circle>
            <Heading as="h6" size="lg" marginRight={"70px"}>
              Status Pedidos
            </Heading>
          </div>
        </HStack>
      </Center>
    </div>
  );
};

export default MenuAdmin;
