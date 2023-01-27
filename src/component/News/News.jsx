import React from 'react'
import Header from "../Header/Header";
import Modale from '../Modale/Modale';
import Card from '../Card/Card';
import "./News.css";

export default function News() {
  return (
    <React.Fragment>
      <div className='news__container'>
        <Header />
        <Card />
        
      </div>
    </React.Fragment>
  )
}