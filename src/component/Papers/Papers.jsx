import React, {useState} from 'react';
import "./Papers.css";

export default function Papers() {

    // liste des journaux existants
    const [papers, setPapers] = useState([]);
    // nouveau journal
    const [newPaper, setNewPaper] = useState('');
    // affichage ou non du champ de saisie d'un nouveau journal
    const [isPaperFormVisible, setIsPaperFormVisible] = useState(false);

    // action au clique sur le bouton 'Ajouter un commentaire'
    const handleAddPaper = () => {
        // on rend visible le champ de saisie
        setIsPaperFormVisible(true);
    };

    // action au clique sur le bouton 'Annuler'
    const handleCancelPaper = () => {
        
    }

    // action au clique sur le bouton 'Valider'


    // action du clique sur le bouton 'Supprimer'


  return (

    <React.Fragment>

      <div className='papers__container'>
        
        <p className='papers__title'>Journaux à consulter</p>

        <div className='papers__add'>
            {/* l'utilisateur clique sur le bouton 'Ajouter un journal' */}
            <button className='papers__add-button' onClick={handleAddPaper}>+</button>
            <span className='papers__add-content'>Ajouter un journal</span>
        </div>

        
        
      </div>

    </React.Fragment>

  )

}