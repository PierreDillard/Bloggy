import React from "react";
import Header from "../Header/Header";
import Card from "../Card/Card";
import "./ArtGallery.css";
/* Fausses données de test */
const data = [
  { id: 1, title: 'Actualités' },
  { id: 2, title: 'Sport' },
  { id: 3, title: 'Théatre' },
  { id: 4, title: 'Actualités' },
  { id: 5, title: 'Sport' },
  { id: 6, title: 'Théatre' },
  { id: 7, title: 'Actualités' },
  { id: 8, title: 'Sport' },
  { id: 8, title: 'Théatre' },
];

export default function ArtGallery() {
  return (
    <React.Fragment>
      <div className="art-gallery__container">
        <Header />
        <div className="art-gallery__card__container">
      {/*   On fait une boucle avec Map sur tous les éléments du tableau data, on leur donne une clé unique pour éviter des souçis de performance et un titre, puis on affiche, pour chacunes des data, Card et son contenu */}
        {data.map((item) => (
          <Card key={item.id} title={item.title} />

        ))}
       
        
        

        </div>
        
     
      </div>
    </React.Fragment>
  );
}
