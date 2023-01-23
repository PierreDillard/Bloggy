import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LOGIN,   LOGOUT } from '../../actions/user';
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  )
}

export default Login