import React from 'react';
import './Header.css';
import Menu from '../Menu/Menu';
import imgLogo from "../../assets/logo_BloGGy_white.webp";
// import { ReactReduxContext } from 'react-redux';


export default function Header() {
  return (
    <React.Fragment>
      <div className="header__banner">
        <img className="header__logo" src={imgLogo} alt="Logo de BloGGy" />
      </div> 
      <Menu />
    </React.Fragment>
  )
}

