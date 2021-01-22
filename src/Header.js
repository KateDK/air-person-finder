import React from 'react';
import './Header.css';
import logo from './logo.png';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-border" />
      <img className="Header-logo" src={logo} alt="Logo" />
    </div>
  );
};

export default Header;
