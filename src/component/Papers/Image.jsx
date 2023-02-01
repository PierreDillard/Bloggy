import React, {useState} from 'react';
import "./Papers.css";

export default function Papers() {

    // liste des journaux existants
    const [papers, setPapers] = useState([]);
    // nouveau journal
    const [newPaper, setNewPaper] = useState('');
    // affichage ou non du champ de saisie d'un nouveau journal
    const [isPaperFormVisible, setIsPaperFormVisible] = useState(false);
    // édition ou non d'un nouveau lien de journal
    const [editingPaperIndex, setEditingPaperIndex] = useState(-1);

    const [selectedImage, setSelectedImage] = useState(null);
  

    // action au clique sur le bouton 'Ajouter un commentaire'
    const handleAddPaper = () => {
        // on rend visible le champ de saisie
        setIsPaperFormVisible(true);
    };

    // action au clique sur le bouton 'Annuler'
    const handleCancelPaper = () => {
      // cache le formulaire de saisie
      setIsPaperFormVisible(false);
      // efface le contenu du champ de saisie
      setNewPaper('');
      // lien en cours d'édition annulé donc d'index -1
      setEditingPaperIndex(-1);
    }

    // action au clique sur le bouton 'Valider'
    const handleSubmitPaper = (event) => {
      // empếche le comportement par défaut
      event.preventDefault();
      // aucun lien en cours d'édition
      if (editingPaperIndex === -1) {
        // on ajoute le nouveau lien dans la liste
        setPapers([...papers, newPaper]);
      // lien en cours d'édition
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
      // on cache le formulaire de saisie
      setIsPaperFormVisible(false);      
      // on efface le contenu du champ de saisie
      setNewPaper('');
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
    
    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
      };
      
      const handleUploadImage = () => {
        // upload selectedImage here
      };
    

  return (

    <React.Fragment>

      <div className='papers__container'>
        
        <div className='papers__editForm'>

          <p className='papers__title'>Journaux à consulter</p>

          <div className='papers__add'>
              {/* l'utilisateur clique sur le bouton 'Ajouter un journal' */}
              <button className='papers__add-button' onClick={handleAddPaper}>+</button>
              <span className='papers__add-content'>Ajouter un journal</span>
          </div>

          {/* on affiche le formulaire de champ de saisie et les boutons Valider et Annuler */}
          {isPaperFormVisible && (
              <form className='papers__form' onSubmit={handleSubmitPaper}>
                <input 
                    className='papers__input-field'
                    type="text"
                    value={newPaper}
                    // au clique on récupère la valeur de l'input et on maj sa valeur avec setNewPaper
                    onChange={(e) => setNewPaper(e.target.value)}
                />

                <button className='papers__button papers__button--confirm' type="submit">
                    Valider
                </button>
                <button className='papers__button papers__button--cancel' onClick={handleCancelPaper}>
                    Annuler
                </button>
                <input type="file" onChange={handleImageChange} />
<button onClick={handleUploadImage}>Charger une image</button>
              </form>
           )}

        </div>

        <div className='papers__container-list'>

          {papers.map((paper, index) => (

            <div key={index} className='papers__list' >
              <div className='papers__content'>

              






                <div className='papers__container-image'>
                  <div className='papers__input-image'>

coucou
                  



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

        </div>
        
      </div>

    </React.Fragment>

  )

}