import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionlogin, LOGIN, LOGOUT } from "../../actions/user";
import { useNavigate } from "react-router-dom";
import imgLogo from "../../assets/logo_BloGGy_white.webp";
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Création d'un email et d'un password de test

    if (email === "test@example.com" && password === "password") {
      dispatch(actionlogin(email, "token"));
      navigate("/");
      /*  Si l'email et le mot de passe sont corrects on envoie l'action "actionlogin", l'email et le password */
    } else {
      /*  S'il y a une erreur, on envoie un message d'erreur */
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
              ref={inputRef}
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
          </label>
        </div>

        <button
          type="submit"
          className="login__button login__button--connexion"
        >
          <span className="login__button-content login__button-content--connect">Connexion</span>
        </button>

        {/*  On affiche un message erreur dans l'input si le mot de passe ou l'email est incorrect */}
        {error && (
          <p className="form__error-message" onClick={handleCloseError}>
            {error}
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;




