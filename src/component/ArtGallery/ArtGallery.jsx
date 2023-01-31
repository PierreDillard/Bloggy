import React, { useState } from "react";
import Header from "../Header/Header";
import Card from "../Card/Card";
import "./ArtGallery.css";


const data = [
  { id: 1, title: "Actualités" },
  { id: 2, title: "Sport" },
  { id: 3, title: "Théatre" },
  { id: 4, title: "Actualités" },
  { id: 5, title: "Sport" },
  { id: 6, title: "Théatre" },
  { id: 7, title: "Actualités" },
  { id: 8, title: "Sport" },
  { id: 9, title: "Théatre" },
];

export default function ArtGallery() {

  /*  state */
  const [cardNumbers, setCardNumbers] = useState(3);
  const [showMore, setShowMore] = useState(true);

  /* function qui ajoute 3 Card au click */
  const handleShowMore = () => {
    setCardNumbers(cardNumbers + 3);
    setShowMore(false)
  };


  /* function qui enlève 3 Card au click */
  const handleShowLess = () => {
    setCardNumbers(cardNumbers -3);
    setShowMore(true)
  }

    return (

      <React.Fragment>

        <div className="art-gallery__container">

          <Header />

          <div className="art-gallery__card-container">

            {/* On affiche les Card (en partant du 1 element, puis 
              on coupe en fonction de cardNumbers, si cardNumber = 3 on affiche 3 Card) */}
            {data.slice(0, cardNumbers).map((item) => (
            <Card key={item.id} title={item.title} />
            ))}

          </div>

          <div className="art-gallery__button-container">

            {/* Si on a plus de 3 Card à afficher, on affiche le bouton "Afficher plus" */}
            {cardNumbers < data.length && (
              <button className="art-gallery__button art-gallery__button--more" onClick={handleShowMore}>
                Afficher plus
              </button>
            )}

            {/* Si on a au moins 6 cartes à afficher, on affiche le bouton "Afficher moins" */}
            {cardNumbers >= 6 && (
              <button className="art-gallery__button art-gallery__button--less" onClick={handleShowLess}>
                Afficher moins
              </button>
            )}

          </div>

        </div>

      </React.Fragment>

    );
    
}



