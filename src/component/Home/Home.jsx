import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Home.css';

 function Home() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <div className='Home__container'>
      <div className='Home__banner'>
        <h1 className='Home__title'>BloGGy</h1>
        <Link to='/login'>
          <button className='Home__button'>
          <span className='Home__button-content'>Connexion</span>
          </button>
        </Link>
      </div>
      {isLoggedIn ? <p> Connecté</p> : null}
      <p className='Home__slogan'>Le blog fait pour toi</p>
    </div>
  )
}


export default Home;