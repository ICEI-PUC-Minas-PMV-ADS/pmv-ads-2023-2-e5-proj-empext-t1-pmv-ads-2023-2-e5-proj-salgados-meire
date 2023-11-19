import React from 'react';
import CartButton from '../components/CartButton';

import "../styles/Header.css";
import ProfileButton from './ProfileButton';
import { Heading } from '@chakra-ui/react';
import HomeButton from './HomeButton';

function Header(props) {
  const { title, showProfileIcon, showCartIcon = true } = props;
  return (
    <header className="header">
      <div className="container">
        <Heading as='h1' size='lg' noOfLines={1}>
          {title}
        </Heading>
        <div className='buttons-container'>
          {showCartIcon && <CartButton />}
          {showProfileIcon && <ProfileButton />}
          <HomeButton />
        </div>
      </div>
    </header>
  );
}

export default Header;