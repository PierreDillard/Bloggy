import React, { useState } from 'react';

// useState = utilitaire pour créer un état qui contiendra les commentaires ajoutés
// permet d'utiliser l'état dans les functions components de react
// c'est un hook
// il permet à un composant de gérer son propre état
// il prend un argument qui est la valeur initiale de l'état
// il renvoie un tableau contenant la valeur actuelle de l'atat et une fonction pour la maj

function CommentContainer() {
    // state pour stocker les commentaires
    // tableau vide qui contiendra les commentaires ajoutés
    const [comments, setComments] = useState([]);

    // state pour stocker le commentaire actuel
    // chaine vide qui contiendra le commentaire à rajouter
    const [newComment, setNewComment] = useState('');

    // fonction de gestionnaire d'événement = elle doit récupérer la valeur entrée dans 
    // le champ de saisie et l'ajouter à l'état des commentaires
    // action quand on clique sur le bouton 'Ajouter un commentaire'
    // ajoute le commentaire actuel newComment à la liste des commentaires Comments
    // et remet le commentaire actuel en chaine vide
  function handleClick() {
    setComments([...comments, newComment]);
    setNewComment('');
  }

  return (
    <div className='comment__container'>
      <div className='comment__bloc-button'>

        {/* lier la fonction 'handleClick' au bouton en utilisant l'attribut 'onClick' */}
        {/* quand l'utilisateur clique sur le bouton, la fonction 'handleClick' est exécutée */}
        <button type='button' className='comment__button' onClick={handleClick}>
          <p className='comment__button-content'>+</p>
        </button>

        <p className='comment__button-title'>Ajouter un commentaire</p>
      </div>
      <div className='comment__bloc-add-comment'>

        {/* input = champ de saisie pour que l'utilisateur puisse entrer son commentaire*/}
        {/* création d'un champ de saisie qui permet à l'utilisateur de taper son commentaire */}
        <input
          type='text'
        //   value est lié à l'état 'newComment'
        //   cela permet de stocker la valeur entrée dedans
          value={newComment}
        //   onChange est lié à la fonction qui maj l'état 'newComment' avec la valeur entrée dans le champ
          onChange={(e) => setNewComment(e.target.value)}
        />
        <ul>
          {/* fonction map = parcourir et afficher dans une liste ul */}
          {/* la fonction 'map' permet de parcourir les commentaires dans l'état 'comments' */}
          {/* elle les affiche dans une liste */}
          {/* chaque commentaire est affiché dans un élément <li> avec une unique clé pour identifier le comme ntaire */}
          {comments.map((comment) => (
            <li key={comment}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// exporter ce composant pour qu'il puise être utilisé dans d'autres composants
export default CommentContainer;
