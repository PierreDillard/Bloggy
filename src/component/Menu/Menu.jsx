import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  return (
    <div>
        <div className='menu'>
        {/* Home */}
        <Link to='/'>
            <button className='home__button'>
            <span className='home__button-content'>Accueil</span>
            </button>
        </Link>
        {/* News */}
        <Link to='/news'>
            <button className='home__button'>
            <span className='home__button-content'>Actualités</span>
            </button>
        </Link>
        {/* Videos */}
        <Link to='/video'>
            <button className='home__button'>
            <span className='home__button-content'>Actualités</span>
            </button>
        </Link>
        {/* Art gallery */}
        <Link to='/art-gallery'>
            <button className='home__button'>
            <span className='home__button-content'>Actualités</span>
            </button>
        </Link>
        {/* Internships */}
        <Link to='/internship'>
            <button className='home__button'>
            <span className='home__button-content'>Actualités</span>
            </button>
        </Link>
        {/* Contact */}
        <Link to='/contact'>
            <button className='home__button'>
            <span className='home__button-content'>Actualités</span>
            </button>
        </Link>
    </div>
    <div>
        {/* Disonnect */}
        <Link to='/contact'>
            <button className='home__button'>
            <span className='home__button-content'>Déconnexion</span>
            </button>
        </Link>
    </div>
    </div>
    
  )
}



