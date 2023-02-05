import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/logo_BloGGy_white.webp";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/Header";
import { actionlogin } from "../../actions/user";
import "./Home.css";

export default function Home() {

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  
/* On vérifie si un utilisateur est connecté en consultant les données stockées localement via le localStorage, si on trouve un token et un email, on envoie une action de connexion via "dispatch(actionlogin..." */

  useEffect(() => {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    if (email && token) {
      dispatch(actionlogin(email, token));
    }
  }, [dispatch]);

  return (
    <div className="home__container">

      {/*Si l'utilisateur n'est pas connecté, on affiche "connexion" et "Inscription", sinon on n'affiche rien */}
      {!isLoggedIn ? (
        <React.Fragment>
          <div className="home__banner">
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
          <Link to="/createCard">
              <button className="home__button">
                <span className="home__button-content">Créer une carte</span>
              </button>
            </Link>
          
         
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