import React, { useState , useEffect} from "react";
import Header from "../Header/Header";
import Card from "../Card/Card";
import ModaleCreateCard from '../Modale/ModaleCreateCard';
import api from "../../api";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Internship.css";
import CreateCard from "../CreateCard/CreateCard";



export default function Internship() {

  const [cardNumbers, setCardNumbers] = useState(3);
  const [showMore, setShowMore] = useState(true);
  const [isShowModale, setIsShowModale] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const closeModale = () => {
    setIsShowModale(false);
  };

  const urlToFilter = "1678717155203.jpg";
  const cardFilter = cards.filter(card => card.url === urlToFilter);





  useEffect(() => {

    const fetchData = async () => {

      setLoading(true);

      try {
        const response = await api.get("/card");
        console.log(response.data)
        setCards(response.data);
        setLoading(false);

      } catch (err) {
        console.log(err);
        setLoading(false);
      }

    };

    fetchData();

  }, []);

  useEffect(() => {
    setFilteredCards(cardFilter);
  }, [cardFilter],console.log(cardFilter));



  // ouverture de la modale d'ajout de Card au clique
  const handleAddCard = () => {
    setIsShowModale(true);
  };

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

/*   Supprimer les cartes */

  const onDelete = (id) => {
    try {
      // Supprime la carte ayant l'id spécifié de la liste de cartes
      setCards(cards.filter((card) => card.id !== id));
    } catch (error) {
      console.log("l'erreur est :", error);
    }
  };
  
  const isUser =useSelector((state) => state.user.role);
  console.log(isUser);
  
  

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
      {/* Si User est un "visiteur" on n'ajoute pas "Ajouter un média"  */}
          {isUser === "visiteur" ? null : (
            <div className='art-gallery__add-card'>
                {/* l'utilisateur clique sur le bouton 'Ajouter un journal' */}
                <button className='art-gallery__add-card-button' onClick={handleAddCard}>+</button>
                <span className='art-gallery__add-card-content'>Ajouter un média</span>
            </div>
            )}



        {/* Card */}
        
        <div className="internship__card-container">
        {/* Modale ajout de Card */}
        {isShowModale &&
                <ModaleCreateCard
                >
                  <CreateCard />
                </ModaleCreateCard>
              }
              
       
         {/* On affiche les Card (en partant du 1er élément, 
              puis on coupe en fonction de cardNumbers
              si cardNumber = 3 on affiche 3 Card) */}
              {cardFilter.slice(0, cardNumbers).map((item) => (
                <Card key={item.id} 
                  id= {item.id} 
                  description={item.description}
                  url={item.url}
                  type={item.type}
                  author={item.author}
                  memberId={item.member_id}
                  onDelete={onDelete}
                  className="card__internship"
                 
                />
              ))}

        </div>

        <div className="internship__button-container">

          {/* Si on a plus de 3 Card à afficher, on affiche le bouton "Afficher plus" */}
          {cardNumbers < cards.length && (
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