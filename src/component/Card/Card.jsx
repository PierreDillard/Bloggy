import React, { memo, useState } from 'react';
import EditionImage from '../EditionImage/EditionImage';
import Button from'../Button/Button';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import './Card.css';
import { Card } from 'react-bootstrap';

export default memo(function Card({ id, ...props }) {
  const [showFileInput, setShowFileInput] = useState(false);
 /*  Le bouton "afficher" de EditionImage doit être caché par défault */
  const [showModifyButton, setShowModifyButton] = useState(false);
  
  

  return (
    <React.Fragment>
      <div className="card__container">
        <div className="card__header">
          <div className="card__bouton-container">
            <button
               className={`card__button card__button--modify ${showModifyButton ? 'valider-active' : ''}`}
              /*Au click sur le bouton on affiche le bouton modifier, qui permet de upload un fichierAu click sur le bouton on affiche le bouton modifier, qui permet de upload un fichier*/
              onClick={() => { setShowFileInput(!showFileInput);
                setShowModifyButton(!showModifyButton);}}
            >
             
              {showModifyButton ? 'Valider' : 'Modifier'}
</button>
           
            <button className="card__button card__button--cancel"
           >
              Supprimer
            </button>
          </div>
        </div>
        <div className="card__content">
          <EditionImage showFileInput={showFileInput} showModifyButton={showModifyButton}  />
          <Comment 
          key={props.id}>

            
          </Comment> 
        </div>
      </div>
    </React.Fragment>
  );
});

/* On utilise propTypes, pour "typer" les props, en cas de Bug, on sait que la props attendu doit être une string */
Card.propTypes = {
  title: PropTypes.string.isRequired,
};