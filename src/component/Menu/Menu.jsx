import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  return (
    <React.Fragment>
        <div className='menu__container'>
            <div className='menu__connect'>
                {/* Home */}
                <Link to='/'>
                    <button className='menu__button menu__button--current'>
                        <span className='menu__button-content'>Accueil</span>
                    </button>
                </Link>
                {/* News */}
                <Link to='/news'>
                    <button className='menu__button'>
                        <span className='menu__button-content'>Actualités</span>
                    </button>
                </Link>
                {/* Videos */}
                <Link to='/video'>
                    <button className='menu__button'>
                        <span className='menu__button-content'>Vidéos</span>
                    </button>
                </Link>
                {/* Art gallery */}
                <Link to='/art-gallery'>
                    <button className='menu__button'>
                        <span className='menu__button-content'>Galerie d'art</span>
                    </button>
                </Link>
                {/* Internships */}
                <Link to='/internship'>
                    <button className='menu__button'>
                        <span className='menu__button-content'>Stages</span>
                    </button>
                </Link>
                {/* Contact */}
                <Link to='/'>
                    <button className='menu__button'>
                        <span className='menu__button-content'>Contact</span>
                    </button>
                </Link>
            </div>
            <div className='menu__disconnect'>
                <span className='menu__greeting'>Bonjour !</span>
                {/* Disonnect */}
                <Link to='/'>
                    <button className='menu__button'>
                        <span className='menu__button-content'>Déconnexion</span>
                    </button>
                </Link>
            </div>
        </div>
        
    </React.Fragment>
    
  )
}


