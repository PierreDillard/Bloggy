import React, { memo, useState } from 'react';
import Button from'../Button/Button';
import PropTypes from 'prop-types';
import image from '../../assets/home.webp';
import EditionImage from '../EditionImage/EditionImage';

import './Card.css';
import '../Comment/Comment'
import Comment from '../Comment/Comment';
import { Card } from 'react-bootstrap';




/* On utilise React memo, pour optimiser la performance de Card, on ne ré rendra Card, que si les props ont changé */

export default React.memo(function Card(props) {

  console.log(props);


  
  return (
    <React.Fragment>

    <div className='card__container'>
    

   
       <div className='card__header'>
       <div className="card__bouton__container">
        <button className='card__button card__button--modify'>Modifier</button>
        <button className='card__button card__button--cancel'>Supprimer</button>
        </div>
        <span className='card__tag'>{props.title}</span>

       </div>
       <div className="card__content">
        
       <EditionImage
       className="edition__image__container" />
   
     <Comment
     />

    
    
     
      </div>
    </div>
    </React.Fragment>
  
    
  )
});
/* On utilise propTypes, pour "typer" les props, en cas de Bug, on sait que la props attendu doit être une string */
Card.propTypes = {
  title: PropTypes.string.isRequired,
};