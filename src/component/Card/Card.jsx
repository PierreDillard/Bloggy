import React from 'react';
import Button from'../Button/Button';
import image from '../../assets/home.webp'
import './Card.css';




export default function Card(props) {

  console.log(props);
  
  return (
    <div className='card__container'>
       <div className='card__header'>
       <div className="card__bouton__container">
        <button className='card__button'>Modifier</button>
        <button className='card__button'>Supprimer</button>

       </div>
        <span className='card__tag'>{props.title}</span>
      </div>
      <img src={image} className='card__image'/>
      
    
     <p className='card__description'>here are many variations of passages of Lorem Ipsum available, but the majority</p>
      <p className='card__comment'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
    </div>
  )
}