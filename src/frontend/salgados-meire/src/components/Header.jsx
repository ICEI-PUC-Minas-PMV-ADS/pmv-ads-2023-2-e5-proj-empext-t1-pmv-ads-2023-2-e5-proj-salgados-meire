import React from 'react';
import CartButton from '../components/CartButton';

import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Cardápio</h1>
        <CartButton />
      </div>
    </header>
  );
}

export default Header;