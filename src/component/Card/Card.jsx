import React from 'react';
import Button from'../Button/Button';
import './Card.css';




export default function Card() {
  
  return (
    <div className='card-container'>
       <div className='card-header'>
        <button className='card__button'>Modifier</button>
        <button className='card__button'>Supprimer</button>
        <span className='card__tag'>Actualites</span>
      </div>
    
     <p className='card__description'>here are many variations of passages of Lorem Ipsum available, but the majority</p>
      <p className='card__comment'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
    </div>
  )
}