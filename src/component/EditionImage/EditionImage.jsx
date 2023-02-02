import React, { useState } from 'react';
import image from '../../assets/home.webp';
import './EditionImage.css';

export default function EditionImage({ showFileInput , setShowFileInput}) {
  const [imageUrl, setImageUrl] = useState(image);

  const handleFileInput = (event) => {
    setImageUrl(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <React.Fragment>
      <div className="edition__image__container">
        <img src={imageUrl} className="edition__image" />
      </div>
      {showFileInput && <input type="file" onChange={handleFileInput} />}
      <button onClick={() => setShowFileInput(!showFileInput)}>
        Modifier
      </button>
    </React.Fragment>
  );
}
