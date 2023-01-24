import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionlogin, LOGIN, LOGOUT } from "../../actions/user";
import { useNavigate } from "react-router-dom";
import imgLogo from "../../assets/logo_BloGGy_white.svg";
import "./Login.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");


  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Création d'un email et d'un password de test

    if (email === "test@example.com" && password === "password") {
      dispatch(actionlogin(email, "token"));
      navigate("/");
      /*   Si l'email et le mot de passe sont correct on envoie l'action "login", l'email et le password */
    } else {
      /*  Si il ya une erreur , en envoie un message d'errreur */
      setError("Email ou mot de passe incorrect");
      setEmail('');
      setPassword('');
   
    }
  };

  const handleCloseError = () => {
    setError("");
  }

  return (
    <div className="login__container">
      <div className="login__banner">
        <img className="home__logo" src={imgLogo} alt="Logo de BloGGy" />
        <Link to="/">
          <button className="login__button login__button--welcome">
            <span className="login__button-content">Accueil</span>
          </button>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form__informations">
          <legend className="form__title">Se connecter</legend>
          <label>
            <input
           className={`form__input ${error ? "error" : ""}`}
              type="email"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
             
             
          </label>
          <label>
            <input
              className="form__input"
              type="password"
              value={password}
              placeholder="Mot de passe"
              onChange={(event) => setPassword(event.target.value)}
            />
            {error && <p className="error-message" onClick={handleCloseError}>{error}</p>}
           
          </label>
        </div>
        <button
          type="submit"
          className="login__button login__button--connexion"
        >
          Connexion
        </button>
        {/*  On affiche un message erreur dans l'input  si le mot de passe ou l'email est incorect */}

        
      </form>
    </div>
  );
}

export default Login;
