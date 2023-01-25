import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/logo_BloGGy_white.svg";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import "./Home.css";

export default function Home() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div className="home__container">
      <div className="home__banner">
        <img className="home__logo" src={imgLogo} alt="Logo de BloGGy" />

        {/* L'utilisateur n'est pas connecté, on affiche "connexion", sinon on affiche rien  */}
        {!isLoggedIn ? (
          <Link to="/login">
            <button className="home__button home__button--connexion">
              <span className="home__button-content">Connexion</span>
            </button>
          </Link>
        ) : null}
      </div>
<<<<<<< HEAD
        {/*     Si l'utilisateur est connecté, on affiche le menu s'il n'est pas connecté on affiche rien */}
        {isLoggedIn ? <Menu /> : null}
      <p className='home__slogan'>Le blog fait pour toi</p>
=======
      {/*     Si l'utilisateur est connecté, on affiche le menu s'il n'est pas connecté on affiche rien */}
      {isLoggedIn ? <Header /> : null}

      {!isLoggedIn ? (
        <p className="home__slogan">Le blog fait pour toi</p>
      ) : null}
>>>>>>> 3ce5ef881f2dc872bedfd4160f7af198e1ce0b2d
    </div>
  );
}
