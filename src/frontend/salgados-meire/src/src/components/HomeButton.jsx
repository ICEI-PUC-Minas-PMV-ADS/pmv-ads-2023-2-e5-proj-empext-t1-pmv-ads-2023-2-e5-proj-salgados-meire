import { BsHouse } from "react-icons/bs";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/CartButton.css";

function HomeButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const navigateToHome = () => {
    if (currentPath.includes("Admin")) navigate("/Admin/Home");
    else navigate("/");
  };

  return (
    <button
      type="button"
      className="cart__button"
      onClick={() => navigateToHome()}
    >
      <BsHouse />
    </button>
  );
}

export default HomeButton;
