import React, { useContext, useState } from "react";
import "../styles/Form.css";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import { Heading, Input, Select, Text } from "@chakra-ui/react";

const FinalizarScreen = () => {
    const { clienteId, cartItems, setCartItems } = useContext(AppContext);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        formaPagamento: "D",
        trocoPara: 0,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const itensPedidos = cartItems.map((item) => {
            return {
                salgadoId: item.id,
                quantidade: item.quantidade,
                valorUnitarioNaCompra: item.valorUnitário,
                observacoes: ""
            }
        })

        const payload = {
            clienteId,
            dataPedido: new Date(),
            status: "P",
            formaPagamento: formData.formaPagamento,
            trocoPara: formData.trocoPara,
            itensPedidos
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        };

        fetch("https://localhost:7063/v1/Clientes/criar-pedido", requestOptions)
            .then((response) => {
                return;
            })

        setCartItems([])
        navigate("/Meus-pedidos");

    };

    return (
        <div className="form_container">
            <Heading as='h2' size='lg' noOfLines={1}>Confirme seus dados</Heading>
            <form onSubmit={handleSubmit}>
                <div className="div_container">
                    <div className="input_container">
                        <Text><b>Selecione a forma de pagamento:</b></Text>
                        <Select
                            color="black"
                            colorScheme="white"
                            bg="white"
                            name="formaPagamento"
                            defaultValue={formData.formaPagamento}
                            onChange={handleInputChange}
                        >
                            <option value="D">Dinheiro</option>
                            <option value="C">Cartão de Crédito/Débito</option>
                        </Select>
                    </div>
                    <div className="input_container">
                        {
                            formData.formaPagamento === 'D' && (
                                <div>
                                    <Text><b>Troco para:</b></Text>
                                    <Input
                                        placeholder='Valor'
                                        color='black'
                                        bgColor='white'
                                        type="number"
                                        id="trocoPara"
                                        name="trocoPara"
                                        value={formData.trocoPara}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            )
                        }
                    </div>
                </div>
                <button type="submit" className="button_form">Finalizar Pedido</button>
            </form>
            <button type="button" className="button_form" onClick={() => navigate("/Carrinho")}>Cancelar</button>
        </div>
    );
};

export default FinalizarScreen;
