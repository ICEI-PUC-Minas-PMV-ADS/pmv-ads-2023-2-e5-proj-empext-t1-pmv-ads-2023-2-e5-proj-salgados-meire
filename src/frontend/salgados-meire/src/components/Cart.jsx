import React, { useContext, useEffect } from "react";
import CartItem from "../components/CartItem";
import AppContext from "../context/AppContext";
import "../styles/Cart.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Cart() {
  const navigate = useNavigate();

  const { cartItems, totalPrice, setTotalPrice } = useContext(AppContext);

  useEffect(() => {
    const total = cartItems.reduce(
      (acc, att) => acc + att.valorUnitário * att.quantidade,
      0
    );
    setTotalPrice(total);
    // eslint-disable-next-line
  }, [cartItems]);

  const genaretaDataDeEntrega = () => {
    const hoje = new Date();

    const dataDaquiASeteDias = new Date();
    dataDaquiASeteDias.setDate(hoje.getDate() + 7);

    const formatoBrasileiro = new Intl.DateTimeFormat("pt-BR");
    const dataFormatada = formatoBrasileiro.format(dataDaquiASeteDias);

    return dataFormatada;
  };

  return (
    <div>
      <Header title={"Meu Carrinho"} showProfileIcon={true} />
      <div className="div--container">
        <section className="cart--active">
          <div className="cart-items">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} items={cartItem} />
            ))}
          </div>
          <div className="cart-resume">{`Data de Entrega: ${genaretaDataDeEntrega()} (7 dias corridos)`}</div>
          <div className="cart-resume">{`TOTAL: R$ ${totalPrice}`}</div>
          <button
            className="margin-button"
            type="button"
            onClick={() => navigate("/")}
          >
            Continuar comprando
          </button>
          {cartItems.length > 0 && (
            <button
              type="button"
              className="margin-button-second"
              onClick={() =>
                navigate("/Form", { state: { fromProfileButton: false } })
              }
            >
              Confirmar meus dados
            </button>
          )}
        </section>
      </div>
    </div>
  );
}

export default Cart;
