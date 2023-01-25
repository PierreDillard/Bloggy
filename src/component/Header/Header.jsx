import React from 'react';
import './Header.css';
import Menu from '../Menu/Menu';
import imgLogo from "../../assets/logo_BloGGy_white.svg";
// import { ReactReduxContext } from 'react-redux';


export default function Header() {
  return (
    <React.Fragment>
      <img className="home__logo" src={imgLogo} alt="Logo de BloGGy" />
      <Menu />
    </React.Fragment>
  )
}

