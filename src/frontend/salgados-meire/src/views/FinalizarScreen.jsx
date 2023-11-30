import React, { useContext, useState } from "react";
import "../styles/Form.css";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

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
        <div>
            <h2>Confirme seus dados</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="endereco">Forma de Pagamento:</label>
                    <select name="formaPagamento" defaultValue={formData.formaPagamento} onChange={handleInputChange}>
                        <option name="formaPagamento" value="D">Dinheiro</option>
                        <option name="formaPagamento" value="C">Cartão de Crédito/Débito</option>
                    </select>
                </div>
                {
                    formData.formaPagamento === 'D' && (
                        <div>
                            <label htmlFor="nome">Troco Para:</label>
                            <input
                                type="text"
                                id="trocoPara"
                                name="trocoPara"
                                value={formData.trocoPara}
                                onChange={handleInputChange}
                            />
                        </div>
                    )
                }
                <button type="submit">Finalizar Pedido</button>
                <button type="button" onClick={() => navigate("/Carrinho")}>Cancelar</button>
            </form>
        </div>
    );
};

export default FinalizarScreen;
