import React, { useState, useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionlogin, LOGIN, LOGOUT } from "../../actions/user";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import imgLogo from "../../assets/logo_BloGGy_white.webp";
import api from '../../api';
import "./Login.css";

function Login() {

  const inputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);


/* 
  api.post('/login', { email, password })
  .then(res => {
      api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`

      dispatch({
          type: SET_USER,
          payload: {
              email: res.data.email,
              token: res.data.token
          }
      })

      navigate('/')
  })
  .catch(err => {
      //Gestion d'erreur
  })
}
 */
const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await api.post('/login', { email, password });
    console.log(response.data);
    dispatch(actionlogin(email, "token"));
    navigate("/");
  } catch (error) {
    console.log(error.response.data);
    setError("Email et/ou mot de passe incorrects");
    setEmail("");
    setPassword("");
  }
};

  const handleCloseError = () => {
    setError("");
  };

  return (
    <div className="login__container">
      <div className="login__banner">
        <Link to="/">
          <button className="login__button login__button--welcome">
            <span className="login__button-content">Accueil</span>
          </button>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-form__informations">
          <legend className="login-form__title">Se connecter</legend>

          <label>
            <input
              className={`login-form__input ${error ? "error" : ""}`}
              ref={inputRef}
              type="email"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          <label>
            <input
              className="login-form__input"
              type="password"
              value={password}
              placeholder="Mot de passe"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          <button
          type="submit"
          className="login__button login__button--connexion"
          >
            <span className="login__button-content login__button-content--connect">Connexion</span>
          </button>

          {/*  On affiche un message erreur dans l'input si le mot de passe ou l'email est incorrect */}
          {error && (
            <p className="login-form__error-message" onClick={handleCloseError}>
              {error}
            </p>
          )}

        </div>

      </form>
    </div>
  );
}

export default Login;



