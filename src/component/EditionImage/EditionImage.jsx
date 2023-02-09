import React, { useState } from 'react';

import PropTypes from 'prop-types';
import api from '../../api';
import EditionVideo from '../EditionVideo/EditionVideo';
import './EditionImage.css';


export default function EditionImage({author, id,url,description,type,uploaded_file, showFileInput , setShowFileInput,showModifyButton,data }) {
 /*  State */
console.log(author);
/*  console.log(data); */
 /*  const [imageUrl, setImageUrl] = useState(url);
  const [editDescription, setEditDescription] = useState(description); */
 
  const [authorName, setAuthorName] = useState(author);
  const [editDescription, setEditDescription] = useState(description);
  let [urlFile, setUrlFile] = useState(url);
  const [typeOfMedia, setTypeOfMedia] = useState(type);
  const [uploaded_fileMedia, setploaded_fileMedia] = useState(uploaded_file);
 const [member_id, setMemberId] = useState(0);
  /* const [type, setType] = useState(type); */
 /*  const [member_id, setMemberId] = useState(0);
  
  const [url, setUrl] = useState(""); */
  
  /* const [member_id, setMemberId] = useState(0); */
    
   

    const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = new FormData();
      formData.append("author",author);
    formData.append("uploaded_file", uploaded_file);
      formData.append("description", description);
      formData.append("url", url);
      formData.append("type", type);
     formData.append("member_id", member_id);
      
  
   
    try{ 
      const response = await api.patch(`http://localhost:5000/api/card/${id}`, formData,  { withCredentials: true });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
    


    const [inputValue, setInputValue] = useState("");

const handleInputChange = (event) => {
  setInputValue(event.target.value);
};

  const [showInput, setShowInput] = useState(false);

  /* Fonction d'upload */

  const handleFileInput = (event) => {
    setUrlFile(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
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
      {type==="video" ?  (
        /* <video controls> 
          <source src={`http://localhost:5000/${url}`}/>
          </video> */
          <EditionVideo 
          url={urlFile!==url ? urlFile : `http://localhost:5000/${urlFile}`}
            className="edition_video"
          />
       
          
      ) : (  
        
           <img src={urlFile!==url ? urlFile : `http://localhost:5000/${urlFile}`}
        type={type}
         className="edition__image" type="file" />
         )}
      
        <span className="image__author">
          {author}
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
              {editDescription}
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
      className='edition__submit'
     > Envoyer
      </button>
      )}
</form>
    

    </React.Fragment>
  );
      }




EditionImage.propTypes = {
  showFileInput: PropTypes.bool.isRequired,
  setShowFileInput: PropTypes.func.isRequired,
  showModifyButton: PropTypes.bool.isRequired
};