import { BsFillPersonFill } from "react-icons/bs";
import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";


import "../styles/CartButton.css";

function ProfileButton() {
  const navigate = useNavigate();

  const { clientInfo } = useContext(AppContext);

  const onClickProfileIcon = () => {
    if (clientInfo) navigate("/Meus-pedidos")
    else navigate("/Form", { state: { fromProfileButton: true } })
  }

  return (
    <button
      type="button"
      className="cart__button"
      onClick={onClickProfileIcon}
    >
      <BsFillPersonFill />
    </button>
  );
}

export default ProfileButton;