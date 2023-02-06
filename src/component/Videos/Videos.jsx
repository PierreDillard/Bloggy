import React, {useState} from 'react'
// import Favicon from 'react-favicon'
import * as Icon from 'react-feather';
import Header from "../Header/Header";
import Card from "../Card/Card";
import "./Videos.css";

export default function Videos() {

  // State
  // Card à afficher 3 par 3
  const [cardNumbers, setCardNumbers] = useState(3);
  // afficher ou non plus de 3 Card
  const [showMore, setShowMore] = useState(true);

  /* fonction qui ajoute 3 Card au clique */
  const handleShowMore = () => {
    setCardNumbers(cardNumbers + 3);
    setShowMore(false)
  };

  /* fonction qui enlève 3 Card au clique */
  const handleShowLess = () => {
    setCardNumbers(cardNumbers -3);
    setShowMore(true)
  };

  const data = [
    { id: 1, title: "Actualités" },
    { id: 2, title: "Sport" },
    { id: 3, title: "Théatre" },
    { id: 4, title: "Actualités" },
    { id: 5, title: "Sport" }
  ];

  return (

    <React.Fragment>

      <div className='videos__container'>

        <Header />

        {/* Thèmes des vidéos */}

        <div className='videos-subject__container'>
            
            <div className='videos-subject'>

              <p className='videos-subject__title'>Thèmes des vidéos</p>

              <div className='videos-subject__add'>
                {/* l'utilisateur clique sur le bouton 'Ajouter un thème' */}
                <button className="videos-subject__add-button" /* onClick={handleAddComment} */>+</button>
                {/* <button className={`comment__add-button ${isActive ? 'active' : ''}`} onClick={handleAddComment}>+</button> */}
                <span className='videos-subject__add-text'>Ajouter un thème</span>          
              </div>

              <div className='videos-subject__list-container'>
                <div className='videos-subject__list'>
                    <button className='videos-subject__list-button'>Théâtre</button>
                    <button className='videos-subject__list-icon'><Icon.XCircle /></button>
                </div>

                <div className='videos-subject__list'>
                    <button className='videos-subject__list-button'>Sport collectifs</button>
                    <button className='videos-subject__list-icon'><Icon.XCircle /></button>
                </div>

                <div className='videos-subject__list'>
                    <button className='videos-subject__list-button'>Slam</button>
                    <button className='videos-subject__list-icon'><Icon.XCircle /></button>
                </div>

                <div className='videos-subject__list'>
                    <button className='videos-subject__list-button'>Jardin</button>
                    <button className='videos-subject__list-icon'><Icon.XCircle /></button>
                </div>
              </div>

              

            </div>
            
        </div> {/* Fin thèmes vidéos */}


        {/* Card */}

        <div className="videos-card__container">

          {/* On affiche les Card */}
          {/* si cardNumber = 3 -> on affiche 3 Card  */}
          {data.slice(0, cardNumbers).map((item) => (
            <Card key={item.id} title={item.title} id= {item.id} />
          ))}

        </div>

        <div className="videos-card__buttons">

          {/* Si on a plus de 3 Card à afficher, on affiche le bouton "Afficher plus" */}
          {cardNumbers < data.length && (
            <button className="videos-card__button videos-card__button--more" onClick={handleShowMore}>
              Afficher plus
            </button>
          )}

          {/* Si on a au moins 6 cartes à afficher, on affiche le bouton "Afficher moins" */}
          {cardNumbers >= 6 && (
            <button className="videos-card__button videos-card__button--less" onClick={handleShowLess}>
              Afficher moins
            </button>
          )}

        </div> {/* Fin Card */}

      </div>

    </React.Fragment>

  )

}
