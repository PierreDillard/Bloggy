import React, { useState } from 'react';

// la fonction 'CommentForm' est le composant principal qui contient 
// tous les éléments de la forme commentaire
export default function CommentForm() {

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // la fonction 'handleCommentChange' est liée à l'événement 'onChange' 
  // elle est appelée quand l'utilisateur saisit un commentaire
  function handleCommentChange(event) {
    // elle maj l'état 'newComment' avec la valeur saisie
    setNewComment(event.target.value);
  }

  // la fonction 'handleAddComment' est liée à l'événement 'onClick' 
  function handleAddComment() {
    // elle ajoute le commentaire saisi à l'état 'comments'
    setComments([...comments, newComment]);
    // elle réinitialise l'état 'newComment' pour permettre l'ajout d'un nouveau commentaire
    setNewComment('');
  }

  return (
    <div>

      {/* input pour saisir le commentaire */}
      <input
        type="text"
        // pté value liée à l'état 'newComment'
        value={newComment}
        // événement onChange lié à la fonction 'handleCommentChange'
        onChange={handleCommentChange}
      />

      {/* bouton pour soumettre le commentaire */}
      {/* 'onClick' lié à la fonction 'handleAddComment' */}
      <button onClick={handleAddComment}>Ajouter un commentaire</button>

      {/* liste pour afficher les commentaires soumis */}
      {/* elle itère sur les éléments de l'état 'comments' pour afficher chaque commentaire */}
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>

    </div>
  );
}
