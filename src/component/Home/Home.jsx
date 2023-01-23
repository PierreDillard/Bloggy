import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

 function Home() {
  return (
    <div className='Home-container'>
      <h1 className='Home-title'>
        BloGGy
      </h1>
      <Link to='/login'>
        <button className='Home-button-connexion'>
          Connexion
        </button>
      </Link>
    </div>
  )
}


export default Home;