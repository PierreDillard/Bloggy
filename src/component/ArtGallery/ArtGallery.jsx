import React from "react";
import Header from "../Header/Header";
import Card from "../Card/Card";
import "./ArtGallery.css";

const data = [
  { id: 1, title: 'Actualités' },
  { id: 2, title: 'Sport' },
  { id: 3, title: 'Théâtre' },
];

export default function ArtGallery() {
  return (
    <React.Fragment>
      <div className="art-gallery__container">
        <Header />
        <div className="art-gallery__card__container">
        {data.map((item) => (
          <Card key={item.id} title={item.title} />

        ))}
       
        
        

        </div>
        
     
      </div>
    </React.Fragment>
  );
}
