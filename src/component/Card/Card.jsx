import React from 'react';
import Button from'../Button/Button';
import image from '../../assets/home.webp'
import './Card.css';
import '../Comment/Comment'
import Comment from '../Comment/Comment';




export default function Card(props) {

  console.log(props);
  
  return (
    <React.Fragment>

    <div className='card__container'>
    

   
       <div className='card__header'>
       <div className="card__bouton__container">
        <button className='card__button'>Modifier</button>
        <button className='card__button'>Supprimer</button>
        </div>
        <span className='card__tag'>{props.title}</span>

       </div>
       <div className="card__content">
        
      <img src={image} className='card__image'/>
      
    <div className="card__description__container"> 
     <p className='card__description'>here are many variations of passages of Lorem Ipsum available, but the majority</p>

     </div>
     <div className="card__comment__container">
     <Comment/>

     </div>
    
     
      </div>
    </div>
    </React.Fragment>
  
    
  )
}