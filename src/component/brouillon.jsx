// Pour ouvrir une modale lorsque vous cliquez sur le bouton "Connexion", 
// vous devez utiliser un composant de modale. Vous pouvez ajouter 
// une variable modalOpen dans l'état pour déterminer si la modale doit 
// être ouverte ou fermée.

// Vous pouvez ajouter ce code pour gérer l'ouverture et la 
// fermeture de la modale:

const [modalOpen, setModalOpen] = useState(false);

const handleModalOpen = () => {
  setModalOpen(true);
};

const handleModalClose = () => {
  setModalOpen(false);
};

// Ensuite, dans le rendu, vous pouvez appeler la fonction 
// handleModalOpen lorsque vous cliquez sur le bouton "Connexion":

<button
  type="submit"
  className="login__button login__button--connexion"
  onClick={handleModalOpen}
>
  <span className="login__button-content login__button-content--connect">Connexion</span>
</button>

// Et enfin, vous pouvez inclure le composant de modale en passant 
// la valeur modalOpen et les fonctions handleModalClose et 
// handleModalOpen en tant que props:


<Modale
  open={modalOpen}
  onClose={handleModalClose}
  title="Modal title"
  content="Modal content"
/>

// Le composant de modale peut être créé séparément en 
// utilisant un composant fonctionnel.


// Voici la modale séparée :

import React from "react";

const Modale = ({ children, handleClose }) => (

  <div className="modale__container">
    <div className="modale__overlay" onClick={handleClose} />
    <div className="modale__content">{children}</div>
  </div>
);
export default Modale;

//---------------------

// autre

import React, { useState } from "react";

const Modale = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modale">
      <div className="modale__background" onClick={onClose} />
      <div className="modale__content">{children}</div>
    </div>
  );
};

export default Modale;


// et dans le LOgin : 
const [isModalOpen, setIsModalOpen] = useState(false);

...

<button
  type="button"
  className="login__button login__button--connexion"
  onClick={() => setIsModalOpen(true)}
>
  <span className="login__button-content login__button-content--connect">
    Connexion
  </span>
</button>

...

<Modale isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  Contenu de la modale
</Modale>


//----------------

import React, { useState } from 'react';
import Modal from './Modal';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && email && password) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Rediriger vers la page de connexion
    window.location.replace('/connexion');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pseudo"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Inscription</button>
      </form>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <p>Votre compte est créé.</p>
          <button onClick={handleCloseModal}>Fermer</button>
        </Modal>
      )}
    </>
  );
};

export default SignUpForm;

// et la Modale

import React from 'react';

const ModaleInscr = ({ onClose, children }) => (
  <div style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
    padding: '1rem',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    zIndex: '999'
  }}>
    {children}
    {/* <button onClick={onClose}>Fermer</button> */}
  </div>
);

export default ModaleInscr;
