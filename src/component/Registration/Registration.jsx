import React, { useState, useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import imgLogo from "../../assets/logo_BloGGy_white.webp";
import { actionregister } from "../../actions/user";
import "./Registration.css";



export default function Registration() {

    const [pseudo, setPseudo] = useState("");
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
        dispatch(actionregister(pseudo, email, password));
        navigate("/");
    }

    return (
        <React.Fragment>

            <div className="regist__container">

                <div className="regist__banner">

                    <img className="home__logo" src={imgLogo} alt="Logo de BloGGy" />

                    {/* Bouton Accueil */}
                    <Link to="/">
                    <button className="regist__button regist__button--welcome">
                        <span className="regist__button-content">Accueil</span>
                    </button>
                    </Link>

                </div>

                {/* Formulaire d'inscription */}
                <form  onSubmit={handleSubmit}
                action="" className="regist-form" method="">
                    <div className="regist-form__informations">
                        <legend className="regist-form__title">S'inscrire</legend>

                        <label>
                            <input
                                className="regist-form__input"
                                ref={inputRef} /* focus sur le champ */
                                type="text"
                                value={pseudo}
                                placeholder="Pseudo"
                                onChange={(event) => setPseudo(event.target.value)}
                            />
                        </label>

                        <label>
                            <input
                                className={`regist-form__input ${error ? "error" : ""}`}
                                type="email"
                                value={email}
                                placeholder="Email"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </label>

                        <label>
                            <input
                                className="regist-form__input"
                                type="password"
                                value={password}
                                placeholder="Mot de passe"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </label>

                        <label>
                            <input
                                className="regist-form__input"
                                type="password"
                                value={password}
                                placeholder="Répétez le mot de passe"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </label>

                    </div> {/* Fin div form__informations */}

                    {/* Bouton validez */}
                    <button
                        type="submit"
                        className="regist__button regist__button--confirm"
                    >
                        <span className="regist__button-content regist__button-content--confirm">Validez</span>
                    </button>
                    
                </form> {/* Fin du formulaire d'inscription */}
            </div> {/* Fin div regist__container */}
        </React.Fragment>
    )
}
