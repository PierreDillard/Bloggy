import React, { memo, useState } from "react";
import EditionVideo from '../EditionVideo/EditionVideo';
import api from '../../api'
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Comment from "../Comment/Comment";
import "./Card.css";
import { Card } from "react-bootstrap";

export default memo(function Card({ id,author, description, type,  url}) {
console.log(id);
  const [showFileInput, setShowFileInput] = useState(false);
  /*  Le bouton "afficher" de EditionImage doit être caché par défault */
  const [showModifyButton, setShowModifyButton] = useState(false);

  // utilisé pour l'affichage conditionnel selon le role
  const isUser = useSelector((state) => state.user.role);
  const [authorName, setAuthorName] = useState(author);
  const [editDescription, setEditDescription] = useState(description);
  let [urlFile, setUrlFile] = useState(url);
  const [typeOfMedia, setTypeOfMedia] = useState(type);
  const [uploaded_fileMedia, setploaded_fileMedia] = useState("");
  const [member_id, setMemberId] = useState(0);


  const handleDescriptionChange = (event) => {
    setEditDescription(event.target.value);
  }

  const handleSubmit =async(event) => {
    event.preventDefault();
    const formData = new FormData();
    console.log(editDescription);
    formData.append("description", editDescription);
    api.patch(`card/${id}`,formData)
    .then((response) => {
      console.log(response.data)
    });
  }
 


  return (
    <React.Fragment>
      <div className="card__container">
        <div className="card__header">
          {isUser === "visiteur" ? null : (
            <div className="card__bouton-container">
              <button
                className={`card__button card__button--modify ${
                  showModifyButton ? "valider-active" : ""
                }`}
                onClick={() => {
                  setShowFileInput(!showFileInput);
                  setShowModifyButton(!showModifyButton);
                }}
              >
                {showModifyButton ? "Valider" : "Modifier"}
              </button>

              <button className="card__button card__button--cancel">
                Supprimer
              </button>
            </div>
          )}
        </div>
        <div className="card__content">
          <form className="edition__form" onSubmit={handleSubmit} 
          type={type}
          id={id}>
            <div className="edition__image__container">
              {type === "video" ? (
                <EditionVideo
                  url={
                    urlFile !== url
                      ? urlFile
                      : `http://localhost:5000/${urlFile}`
                  }
                  className="edition_video"
                />
              ) : (
                <img
                  src={
                    urlFile !== url
                      ? urlFile
                      : `http://localhost:5000/${urlFile}`
                  }
                  type={type}
                  className="edition__image"
                />
              )}

              <span className="image__author">{author}</span>
            </div>

            {showFileInput && (
              <input
                name="file"
                className="edition__image__upload"
                type="file"
                onChange={(e) => setploaded_fileMedia(e.target.files[0])}
              />
            )}

            {showModifyButton && (
              <button
                onClick={() => setShowFileInput(!showFileInput)}
                className="edition__button__image--modify"
              ></button>
            )}
            <p className="description">{editDescription}
            </p>

        {showModifyButton && (
          <div className="edition__button__container">
            <button
            type="submit"
           
              className="edition__description__button"
            >
              Modifier description
            </button>

          

            {/*   On clique sur "MOdifier la description", on affiche l'input de saisie en dessous de  la description */}
        
              <input
                type="text"
            
                className="edition__input__description"
                name="description"
                value={editDescription}
                onChange={handleDescriptionChange}
                id={id}
              />
          
          </div>
        

        )}
      </form>

  {/*     {showModifyButton && (
        <button type="submit" value="Envoyer" className="edition__submit">
          
            Envoyer
          </button>
      )} */}

          
          <Comment key={id} author={author}></Comment>
        </div>
        </div>
    
    </React.Fragment>
  );
});

