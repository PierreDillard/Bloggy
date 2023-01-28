import React from 'react'
import Header from "../Header/Header";
import Comment from "../Comment/Comment";
import Modale from '../Modale/Modale';
import "./Videos.css";

export default function Videos() {
  return (
    <React.Fragment>
      <div className='videos__container'>
        <Header />
        <Comment />
      </div>
    </React.Fragment>
  )
}
