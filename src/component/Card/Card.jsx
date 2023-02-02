import React, { memo, useState} from 'react';
import Button from'../Button/Button';
import PropTypes from 'prop-types';
import image from '../../assets/home.webp';
import EditionImage from '../EditionImage/EditionImage';
import Comment from '../Comment/Comment';
import { Card } from 'react-bootstrap';

import './Card.css';
import '../Comment/Comment'


/* On utilise React memo, pour optimiser la performance de Card, on ne ré rendra Card, que si les props ont changé */

export default memo(function Card({id,...props}) {

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  
console.log(props);
  
  return (

    <React.Fragment>

      <div className='card__container'>
    
        <div className='card__header'>

          <div className="card__bouton-container">
            <button className='card__button card__button--modify' onClick={handleClick}>Modifier</button>
            <button className='card__button card__button--cancel'>Supprimer</button>
          </div>

          <span className='card__tag'>{props.title}</span>

        </div>
        
        <div className="card__content">

        {showModal && <EditionImage showModal={showModal} setShowModal={setShowModal} />}

          <EditionImage className="edition__image-container" />
          <Comment 
          key={props.id}>

            
          </Comment> 

        </div>

      </div>

    </React.Fragment>
    
  )
  
});

/* On utilise propTypes, pour "typer" les props, en cas de Bug, on sait que la props attendu doit être une string */
Card.propTypes = {
  title: PropTypes.string.isRequired,
};