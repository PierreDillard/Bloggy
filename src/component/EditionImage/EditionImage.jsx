import React, { useState } from 'react';
import image from '../../assets/home.webp';
import './EditionImage.css';

export default function EditionImage({ showFileInput , setShowFileInput,showModifyButton }) {
 /*  State */
  const [imageUrl, setImageUrl] = useState(image);
  const [description, setDescription] = useState(""
    
    );
  const [showInput, setShowInput] = useState(false);

  /* Fonction d'upload */

  const handleFileInput = (event) => {
    setImageUrl(URL.createObjectURL(event.target.files[0]));
  };
/* 
Modifier la  description */

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
 /*  vider la description */
 const handleUpdateDescription = () => {
  setDescription(description);
}


  return (
    <React.Fragment>
      <div className="edition__image__container">
        <img src={imageUrl} className="edition__image" />
      </div>

      {showFileInput && <input type="file" onChange={handleFileInput}
      className="edition__image__upload" />}
      {showModifyButton && (


      <button onClick={() => setShowFileInput(!showFileInput)}
      className="edition__button__image--modify">
        Modifier
      </button>
      )}
      <p className="description">
              Y a de la joie !!!!!!
      </p>

      {showModifyButton && (
        <div className="edition__button__container">

        <button onClick={() => setShowInput(!showInput)}
        className="edition__description__button">
          Modifier description
        </button>
        <button onClick={handleUpdateDescription} className="edition__description__validate">
      Valider
      </button>
        </div>
      )}
   
   
    {/*   On clique sur "MOdifier la description", on affiche l'input de saisie en dessous de  la description */}
      {showInput ? (
        <input type="text" value={description} onChange={handleDescription}
        className="edition__input__description" />
        
      ) : null}
  
   
    
    </React.Fragment>
  );
};
