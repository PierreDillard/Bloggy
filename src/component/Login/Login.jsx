import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGIN,   LOGOUT } from '../../actions/user';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
 
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault()
    // Création d' un email et d'un password de test

    if (email === 'test@example.com' && password === 'password') {
      dispatch(LOGIN(email, 'token'))
      navigate('/home')
    /*   Si l'email et le mot de passe sont correct on envoie l'action "login", l'email et le password */
    } else {
      console.log("erreur de connexion!")
    }
  }

  return (
    <div className='Home__container'>
      <div className='Home__banner'>
        <h1 className='Home__title'>
          BloGGy
        </h1>
        <Link to='/'>
            <button className='Home__button Home__button--welcome'>
              <span className='Home__button-content'>Accueil</span>
            </button>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form__informations'>
          <legend className='form__title'>Se connecter</legend>
          <label>
            <input className='form__input'
              type="email"
              value={email}
              placeholder='Email'
              onChange={event => setEmail(event.target.value)}
            />
          </label>
          <label>
            <input className='form__input'
              type="password"
              value={password}
              placeholder='Mot de passe'
              onChange={event => setPassword(event.target.value)}
            />
          </label>
        </div>
        <button type="submit" className='Home__button Home__button--connexion'>Connexion</button>
      </form>
    </div>
  )
}

export default Login