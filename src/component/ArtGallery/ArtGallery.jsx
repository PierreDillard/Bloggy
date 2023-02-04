import React from "react";
import Header from "../Header/Header";
import {useState} from 'react';
import "./ArtGallery.css";

export default function ArtGallery() {


  return (
    <React.Fragment>
      <div className="art-gallery__container">
        <Header />
        <div className="card__container">
          <div className="card">

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
