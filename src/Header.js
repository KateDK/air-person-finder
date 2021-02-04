import React from 'react';
import './Header.css';
import logo from './Union.svg';

const Header = () => {
  return (
    <header className="Header Header-border">
      <img className="Header-logo" src={logo} alt="Logo" />
    </header>
  );
};

export default Header;
