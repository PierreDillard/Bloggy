import React from 'react'
import Header from "../Header/Header";
import Dico from "../Dico/Dico";
import Papers from "../Papers/Papers";
import Comment from "../Comment/Comment";
import Modale from '../Modale/Modale';
import "./News.css";

export default function News() {
  return (
    <React.Fragment>
      <div className='news__container'>
        <Header />
        <Dico />
        <Papers />
      </div>
    </React.Fragment>
  )
}