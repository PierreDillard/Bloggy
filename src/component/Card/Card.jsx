import React, { memo, useState } from "react";
import EditionVideo from '../EditionVideo/EditionVideo';
import api from '../../api'
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Comment from "../Comment/Comment";
import "./Card.css";
import { Card } from "react-bootstrap";

export default memo(function Card({ id,author, description, type,  url}) {
  console.log(id,author, description, type, url)
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



  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("author", author);
    formData.append("uploaded_file", uploaded_fileMedia);
    formData.append("description", editDescription);
    formData.append("url", url);
    formData.append("type", typeOfMedia);
    formData.append("member_id", member_id);

    try {
      const response = await api.patch(
        `http://localhost:5000/api/card/${id}`,
        formData
      );
      setAuthorName(response.data.author);
      setEditDescription(response.data.description);
      setUrlFile(response.data.url);
    } catch (error) {
      console.error(error);
    }
  };

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
          <form className="edition__form" onSubmit={handleSubmit} type={type}>
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
                onChange={(e) => setUrlFile(e.target.value)}
              />
            )}

            {showModifyButton && (
              <button
                onClick={() => setShowFileInput(!showFileInput)}
                className="edition__button__image--modify"
              ></button>
            )}
            <p className="description">{editDescription}</p>

        {showModifyButton && (
          <div className="edition__button__container">
            <button
           
              className="edition__description__button"
            >
              Modifier description
            </button>

            <button
            
              className="edition__description__validate"
            >
              Valider
            </button>

            {/*   On clique sur "MOdifier la description", on affiche l'input de saisie en dessous de  la description */}
        
              <input
                type="text"
            
                className="edition__input__description"
                name="description"
              />
          
          </div>
        

        )}
      </form>

      {showModifyButton && (
        <button type="submit" value="Envoyer" className="edition__submit">
            {" "}
            Envoyer
          </button>
      )}

          
          <Comment key={id} author={author}></Comment>
        </div>
        </div>
    
    </React.Fragment>
  );
});

