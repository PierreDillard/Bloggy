import React from 'react';
import image from '../../assets/home.webp'
import './EditionImage.css'

export default function EditionImage() {
  return (
    <React.Fragment>
    <div className="edition__image__container">
    <img src={image} className='edition__image'/>
    <span className="image__author">
        Par Sam
    </span>
    </div>
    <p className="description">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </p>

   

    </React.Fragment>
        
  )
}
