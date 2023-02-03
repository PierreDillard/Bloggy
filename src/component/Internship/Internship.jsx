import React from 'react'
import Header from "../Header/Header";
import Brouillon from "../Papers/Brouillon";
import "./Internship.css";

export default function Internship() {
  return (
    <React.Fragment>
      <div className='internship__container'>
        <Header />
        <Brouillon />
      </div>
    </React.Fragment>
  )
}
