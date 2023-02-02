import React, { useState } from 'react';
import image from '../../assets/home.webp';
import './EditionImage.css';

export default function EditionImage({showModal, setShowModal}) {
 
  const [imageUrl, setImageUrl] = useState(image);
  const [showFileInput, setShowFileInput] = useState(false);

/*   const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'image.webp';
    link.click();
  }; */

  const handleFileInput = (event) => {
    setImageUrl(URL.createObjectURL(event.target.files[0]));
 
  };

  return (
    <React.Fragment>
      <div className="edition__image__container">
        <img src={imageUrl} className="edition__image" />
        <span className="image__author">
          Par Sam
        </span>
        
      </div>
      {showFileInput && (
        <input type="file" onChange={handleFileInput} />
      )}
      <button onClick={() => setShowFileInput(!showFileInput)}>Modifier</button>
     {/*  <button onClick={handleDownload}>Télécharger une image</button> */}
      <p className="description">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo.
      </p>
    </React.Fragment>
  );
}