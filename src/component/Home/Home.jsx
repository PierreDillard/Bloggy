import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/logo_BloGGy_white.webp";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import "./Home.css";

export default function Home() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div className="home__container">

      {/*Si l'utilisateur n'est pas connecté, on affiche "connexion", sinon on n'affiche rien */}
      {!isLoggedIn ? (
        <React.Fragment>
          <div className="home__banner">
            <img className="home__logo" src={imgLogo} alt="Logo de BloGGy" />
            {/* Connexion */}
            <Link to="/registration">
              <button className="home__button">
                <span className="home__button-content">Inscription</span>
              </button>
            </Link>
            {/* Inscription */}
            <Link to="/login">
              <button className="home__button">
                <span className="home__button-content">Connexion</span>
              </button>
            </Link>
          </div>
        <p className="home__slogan">Le blog fait pour toi</p>
        </React.Fragment>
      ) : null}

      {/* Si l'utilisateur est connecté, on affiche le menu, sinon on n'affiche rien */}
      {isLoggedIn ? (
        <React.Fragment>
          <Header /> 
            <p className='home__presentation'>
              C'est quoi BloGGy ?<br />
              C'est un blog pour toi, utilise-le !!!<br />
              Tu as particulièrement aimé un article d'un journal ? Partage-le !<br />
              Mets tes dessins, tes photos, des images qui t'on plus !<br />
              Charge tes vidéos !<br />
              Tu as fait un super stage ? Témoigne !!
            </p>
        </React.Fragment>
       
      ) : null}
    
    </div>
    
  );
}
