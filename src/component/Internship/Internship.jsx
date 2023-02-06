import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Header from "../Header/Header";
import Card from "../Card/Card";
import "./Internship.css";

export default function Internship() {

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
    { id: 1,},
    { id: 2,},
    { id: 3,},
    { id: 4,},
    { id: 5,}
  ];

  return (

    <React.Fragment>

      <div className='internship__container'>

        <Header />

        {/* Recherche de structures */}

        <div className='internship__search'>

          <div className='internship__search-city'>

            <p className='internship__title-organization'>Tu cherches un stage ?</p>

            <p className='internship__subtitle-organization'>Trouve les structures accueillantes par ville !</p>

            <input 
              className='internship__input-city'
              type="text" 
              placeholder='Entrer le nom de la ville ou le code postal'
            />

            <button className='internship__button-search internship__button-search--city'>
              Chercher
            </button>

          </div>

          <div className='internship__button-cities'>
            <Link to='/organization'>
              <button className='internship__button-search internship__button-search--cities'>
                Toutes les structures
              </button>
            </Link>
          </div>

        </div> {/* Fin recherche structures */}    


        <p className='internship__title-testimony'>
          Ils et elles racontent leurs stages ! Lis leurs témoignages !
        </p>


        {/* Card */}
        
        <div className="internship__card-container">

          {/* On affiche les Card */}
          {/* si cardNumber = 3 -> on affiche 3 Card  */}
          {data.slice(0, cardNumbers).map((item) => (
            <Card key={item.id} title={item.title} id= {item.id} />
          ))}

        </div>

        <div className="internship__button-container">

          {/* Si on a plus de 3 Card à afficher, on affiche le bouton "Afficher plus" */}
          {cardNumbers < data.length && (
            <button className="internship__button internship__button--more" onClick={handleShowMore}>
              Afficher plus
            </button>
          )}

          {/* Si on a au moins 6 cartes à afficher, on affiche le bouton "Afficher moins" */}
          {cardNumbers >= 6 && (
            <button className="internship__button internship__button--less" onClick={handleShowLess}>
              Afficher moins
            </button>
          )}

        </div>

      </div>

    </React.Fragment>

  )

}
