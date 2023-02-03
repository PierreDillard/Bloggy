import React, { useState } from "react";
import './CreateCard.css'

const CreateCard = ({ onSave, initialValues }) => {

    console.log(initialValues);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState( "");
  const [type, setType] = useState( "");

  const handleFileInput = (event) => {
    setImageUrl(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("description", description);
    formData.append("url", url);
    formData.append("type", type);
    onSave(formData);
  };

  return (
    <form 
    className="createcard__form"
    onSubmit={handleSubmit}>
      <div>
      <div className="description__input">

      <label htmlFor="description"
        className="createCard__label">Description de la Carte :</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        /> 
        
      </div>
     
      </div>
      <div>
      <div className="url__input">
      <label htmlFor="url"
        className="createCard__label"
        >URL de l'image ou vidéo:</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
      </div>
    
      </div>
      <div>
      <div className="type__input">
      <label htmlFor="type"
        className="createCard__label"
        >Type du média :</label>
        <input
          type="text"
          id="type"
          value={type}
          onChange={(event) => setType(event.target.value)}
        />
      </div>
      
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default CreateCard;
