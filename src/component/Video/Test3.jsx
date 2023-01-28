import React, { useState } from 'react';


export default function CommentForm() {

    // state pour ouvrir le formulaire
    // isFormOpen = fonction qui contient l'état du formulaire (ouvert ou fermé)
    // par défaut il est fermé
    const [isFormOpen, setIsFormOpen] = useState(false);
    
    // state pour stocker le commentaire actuel
    // chaine vide qui contiendra le commentaire à rajouter
    const [newComment, setNewComment] = useState('');

    // state pour stocker les commentaires
    // tableau vide qui contiendra les commentaires ajoutés
    const [comments, setComments] = useState([]);

    // fonction d'ouverture du formulaire quand on clique sur le bouton 'Ajouter un commentaire'
    function handleClick() {
        // ouvre le formulaire
        setIsFormOpen(!isFormOpen);
    }

    // fonction d'ajout d'un commentaire 
    function handleChange(event) {
        // maj la valeur de 'newComment' avec la valeur entrée dans le champ de saisie
        setNewComment(event.target.value);
    }

    // fonction d'ajout du nouveau commentaire à la suite des précédents quand on clique sur 'Valider'
    function handleConfirm() {
        // ajoute le nouveau commentaire saisi ('newComment') à la liste
        setComments([...comments, newComment]);
        // vide ensuite 'newComment'
        setNewComment('');
        // ferme le formulaire  
        setIsFormOpen(false);
    }

    // fonction d'annulation de commentaire quand on clique sur 'Annuler'
    function handleCancel() {
        // vide 'newComment'
        setNewComment('');
        // fermer le formulaire
        setIsFormOpen(false);
    }

    return (
        <React.Fragment>
            {/* bouton pour ouvrir le formulaire quand on clique sur 'Ajouter un commentaire' */}
            {/* 'onClick' est lié à la fonction 'handleClick' */}
            <button onClick={handleClick}>Ajouter un commentaire</button>

            {/* si le formulaire est ouvert, le champ de saisie et les boutons sont affichés : */}
            {/* si le formulaire est fermé, on n'affiche rien */}
            {isFormOpen && ( 
                <div>
                    <textarea onChange={handleChange} value={newComment} />
                    <button onClick={handleConfirm}>Valider</button>
                    <button onClick={handleCancel}>Annuler</button>
                </div>
            )}

            <div>
            {/* fonction qui parcourt le tableau 'comments' des commentaires et les affiche dans une liste */}
            {/* chaque commentaire est indexé avec une unique clé pour l'identifier */}
            {/* on affiche les commentaires par ordre croissant d'ajout */}
            {/* slice().reverse() crée une copie du tableau puis inverse cette copie */}
            {comments.slice().reverse().map((comment, index) => (
                <div key={index}>{comment}</div>
            ))}
            </div>

        </React.Fragment>
    );
}

