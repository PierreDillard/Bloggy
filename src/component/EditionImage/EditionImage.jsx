import React, { useState } from 'react';

import PropTypes from 'prop-types';
import api from '../../api'

import './EditionImage.css';
import { NavItem } from 'react-bootstrap';

export default function EditionImage({ id,url,description,type,uploaded_file, showFileInput , setShowFileInput,showModifyButton,data }) {
 /*  State */

 console.log(url);
  const [imageUrl, setImageUrl] = useState("");
  const [ediDescription, setEditDescription] = useState("");
    
   

    const handleSubmit = (event) => {
      event.preventDefault();
      for( let key in event.target){
        console.log(event.target[key].value);
        
      }
    }
    
/*       const data = {
        imageUrl,
        description,
      };
    
      api.patch('/card/addCard', data)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
     */

    const [inputValue, setInputValue] = useState("");

const handleInputChange = (event) => {
  setInputValue(event.target.value);
};

  const [showInput, setShowInput] = useState(false);

  /* Fonction d'upload */

  const handleFileInput = (event) => {
    setImageUrl(URL.createObjectURL(event.target.files[0]));
  };
/* 
Modifier la  description */

  const handleDescription = (event) => {
    setEditDescription(event.target.value);
  };
 /*  vider la description */
 const handleUpdateDescription = (event) => {
  setEditDescription(event.target.value);
}


  return (
    <React.Fragment>

    <form className="edition__form"
    onSubmit={handleSubmit}
    type={type} >
  
      <div className="edition__image__container">
        <img src={`http://localhost:5000/${url}`}
         className="edition__image" type="file" />

        <span className="image__author">
          Par Sam
        </span>
      </div>

      {showFileInput && 
      <input 
      name="file"
      className="edition__image__upload"
      type="file"
       onChange={handleFileInput}
       />}
       
      {showModifyButton && (


      <button onClick={() => setShowFileInput(!showFileInput)}
      className="edition__button__image--modify">
       
      </button>
      )}
      <p className="description">
              {description}
      </p>

      {showModifyButton && (
        

        
        <div className="edition__button__container">

        <button onClick={() => setShowInput(!showInput)}
        className="edition__description__button">
          Modifier description
        </button>

     
     
      <button onClick={() => setEditDescription(inputValue)}
        className="edition__description__validate">
      Valider
</button>




   
    {/*   On clique sur "MOdifier la description", on affiche l'input de saisie en dessous de  la description */}
      {showInput ? (
        <input type="text"
         value={inputValue} 
         onChange={handleInputChange}
        className="edition__input__description"
        name="description" />
        
      ) : null}
      </div>
      )}
      {showModifyButton && (
      <button type="submit" value="Envoyer"
      className='edition__submit' > Envoyer
      </button>
      )}
</form>
    

    </React.Fragment>
  );
};



EditionImage.propTypes = {
  showFileInput: PropTypes.bool.isRequired,
  setShowFileInput: PropTypes.func.isRequired,
  showModifyButton: PropTypes.bool.isRequired
};