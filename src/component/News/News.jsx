import React from 'react'
import Header from "../Header/Header";
import Dico from "../Dico/Dico";
// import Card from '../Card/Card';
import Papers from '../Papers/Papers';
// import Modale from '../Modale/Modale';
import "./News.css";

export default function News() {
  return (
    <React.Fragment>
      <div className='news__container'>
        <Header />
        {/* <Card /> */}
        <Dico />
        <Papers />
      </div>
    </React.Fragment>
  )
}