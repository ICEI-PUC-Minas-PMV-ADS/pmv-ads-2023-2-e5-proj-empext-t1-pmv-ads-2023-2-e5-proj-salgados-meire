import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";


import "../styles/CartButton.css";

function CartButton() {
  const navigate = useNavigate();

  const { cartItems } = useContext(AppContext);

  return (
    <button
      type="button"
      className="cart__button"
      onClick={ () => navigate("/Carrinho") }
    >
      <AiOutlineShoppingCart />
      { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> }
    </button>
  );
}

export default CartButton;