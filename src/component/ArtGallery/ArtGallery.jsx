import React, { useState } from "react";
import Header from "../Header/Header";
import {useState} from 'react';
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


  return (
    <React.Fragment>
      <div className="art-gallery__container">
        <Header />
        <div className="card__container">
          <div className="card">

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
       
    )
}