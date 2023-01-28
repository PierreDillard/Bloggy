Pour récupérer et ajouter un commentaire en utilisant les function components avec un bouton "valider", vous pouvez suivre les étapes suivantes:

Utiliser l'état de React pour stocker la valeur du commentaire saisie par l'utilisateur. Vous pouvez utiliser la fonction useState pour cela.

Ajouter un onChange sur l'input de saisie de commentaire pour mettre à jour l'état lorsque l'utilisateur saisit un commentaire.

Ajouter un bouton de validation avec un onClick qui va appeler une fonction pour ajouter le commentaire à une liste de commentaires.

Dans la fonction appelée lorsque le bouton est cliqué, vous pouvez utiliser la fonction setState pour ajouter le commentaire à la liste de commentaires et réinitialiser l'input.

Voici un exemple de code qui met en œuvre ces étapes:

Copy code
import { useState } from 'react';

function CommentForm() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  function handleCommentChange(event) {
    setNewComment(event.target.value);
  }

  function handleAddComment() {
    setComments([...comments, newComment]);
    setNewComment('');
  }

  return (
    <div>
      <input
        type="text"
        value={newComment}
        onChange={handleCommentChange}
      />
      <button onClick={handleAddComment}>Add Comment</button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}
Notez que dans cette exemple, je n'ai pas utilisé un bouton de type <button> mais un bouton de type <input> avec le type "button" pour montrer comment on peut utiliser cela pour ajouter un commentaire.