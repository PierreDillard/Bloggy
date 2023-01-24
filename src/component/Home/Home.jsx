import React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from "../../assets/logo_BloGGy_white.svg"
import './Home.css';

export default function Home() {
  return (
    <div className='home__container'>
      <div className='home__banner'>
        <img className='home__logo' src={imgLogo} alt='Logo de BloGGy' />
        <Link to='/login'>
          <button className='home__button home__button--connexion'>
          <span className='home__button-content'>Connexion</span>
          </button>
        </Link>
      </div>
      <p className='home__slogan'>Le blog fait pour toi</p>

    </div>
  )
}


