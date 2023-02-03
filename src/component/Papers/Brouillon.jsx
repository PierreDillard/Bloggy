import React, { useState } from "react";

  function ImageUploader() { 

    // nouvelle image
    const [image, setImage] = useState(null); 
    // affichage ou non du bouton "Valider" pour le transformer en "Modifier" au clique
    const [isValidated, setIsValidated] = useState(false);
    // affichage ou non de l'image
    const [showImage, setShowImage] = useState(false); 
    // affichage ou non des boutons "Choisir une image" et "Envoyer" et du champ de saisie
    const [showButtons, setShowButtons] = useState(true);
    // liste des journaux existants
    const [papers, setPapers] = useState([]);
    // nouveau journal
    const [newPaper, setNewPaper] = useState('');
    // affichage ou non du champ de saisie d'un nouveau journal
    const [isPaperFormVisible, setIsPaperFormVisible] = useState(false);
    // édition ou non d'un nouveau lien de journal
    const [editingPaperIndex, setEditingPaperIndex] = useState(-1);

  // action au clique sur le bouton "Choisir une image"
  const handleImageSelect = (event) => { 
    setImage(event.target.files[0]); 
  };

  // action au clique sur le bouton 'Ajouter un commentaire'
  const handleAddPaper = () => {
    // on rend visible le champ de saisie
    setIsPaperFormVisible(true);
    // on rend les boutons "Choisir une image" et "Envoyer" et le champ de saisie visibles
    setShowButtons(true);
  };

  // action au clique sur le bouton 'Annuler'
  const handleCancelPaper = () => {
    // cache le formulaire de saisie
    setIsPaperFormVisible(false);
    // efface le contenu du champ de saisie
    setNewPaper('');
    // on cache l'image
    setShowImage(false); 
    // lien en cours d'édition annulé donc d'index -1
    setEditingPaperIndex(-1);
  }

  // action au clique sur le bouton 'Valider'
  const handleSubmitPaper = (event) => {
    // empếche le comportement par défaut
    event.preventDefault();
    // si aucun lien en cours d'édition
    if (editingPaperIndex === -1) {
      // on ajoute le nouveau lien dans la liste
      setPapers([...papers, newPaper]);
    // sinon si lien en cours d'édition
    } else {
      // création d'une copie de la liste des liens
      const newPapers = [...papers];
      // on remplace le lien à l'index correspondant
      newPapers[editingPaperIndex] = newPaper;
      // on met à jour la liste avec la copie
      setPapers(newPapers);
      // l'édition du lien est terminée
      setEditingPaperIndex(-1);
    }
    // // on cache le formulaire de saisie
    // setIsPaperFormVisible(false);      
    // // on efface le contenu du champ de saisie
    // setNewPaper('');
  }

  // action du clique sur le bouton 'Supprimer' d'un lien 
  const handleDeletePaper = (index) => {
    // nouvelle copie de la liste des liens
    const newPapers = [...papers];
    // on supprime le lien à l'index indiqué
    newPapers.splice(index, 1);
    // maj de la liste avec la copie
    setPapers(newPapers);
  }

  return ( 

    <React.Fragment>

      <div className='papers__container'>

        <div className='papers__edit-form'>

          <p className='papers__title'>Journaux à consulter</p>

          <div className='papers__add'>
            {/* l'utilisateur clique sur le bouton 'Ajouter un journal' */}
            <button className='papers__add-button' onClick={handleAddPaper}>+</button>
            <span className='papers__add-content'>Ajouter un journal</span>
          </div>

          {isPaperFormVisible && (

            <div className='papers__form-visible'> 

              {showButtons && ( 
                <div> 
                  <input type="file" onChange={handleImageSelect} /> 
                  <input 
                    type="text" 
                    value={newPaper}
                    placeholder="Entrer l'url du journal"
                    onChange={(event) => setNewPaper(event.target.value)}
                  />
                  <button onClick={() => setShowImage(true) }>Envoyer</button>
                </div> 
              )} 

              {showImage && image && ( 
                <div> 
                  <a href={newPaper}>
                  <img className="papers__image" src={URL.createObjectURL(image)} alt=''/> 
                  </a>
                  <button onClick={() => { 
                    // si on voit les boutons : showButtons=true
                    // si on ne voit pas les boutons : showButton=false donc !showButton=true 
                    // si on a "Valider" : isValidated=true 
                    // si on a "Modifier" : isValidated=false -> !isValidated=true
                    setShowButtons(!showButtons); 
                    setIsValidated(!isValidated);
                    handleSubmitPaper();
                  }} > 
                    {/* si c'est "Valider" on passe en "Modifier" */}
                    {/* si ce n'est pas "Valider" on passe en "Valider */}
                    {isValidated ? "Modifier" : "Valider"}
                  </button> 
                  <button onClick={() => { 
                    // setShowImage(false); 
                    // setShowButtons(false);
                    // setNewPaper("");
                    handleCancelPaper();
                  }} >
                    Annuler
                  </button> 
                </div> 
              )} 

            </div> /* fin papers__form-visible */

          )} {/* fin isFormPaperVisible */}

        </div> {/*fin div papers__edit-form */}

          <div className='papers__container-list'>

            {papers.map((paper, index) => (

              <div key={index} className='papers__list' >
                <div className='papers__content'>
                  <div className='papers__container-image'>
                    <div className='papers__input-image'>
                      <div>
                        {paper}
                      </div>
                    </div>
                  </div>
                </div>
                <button className='papers__button papers__button--delete' onClick={() => handleDeletePaper(index)}>
                    Supprimer
                </button>
              </div>
            ))}

          </div> {/* fin papers__container-list */}

      </div> {/* fin div papers__container */}

    </React.Fragment>

  ); 

}

export default ImageUploader;

