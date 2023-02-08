import React, { useState , useEffect} from "react";
import Header from "../Header/Header";
import Card from "../Card/Card";
import ModaleCreateCard from '../Modale/ModaleCreateCard';
import api from "../../api";

import "./ArtGallery.css";
import CreateCard from "../CreateCard/CreateCard";

/* 
const data = [
  { id: 1, title: "Actualités" },
  { id: 2, title: "Sport" },
  { id: 3, title: "Théatre" },
  { id: 4, title: "Actualités" },
  { id: 5, title: "Sport" },
  { id: 6, title: "Théatre" },
  { id: 7, title: "Actualités" },
  { id: 8, title: "Sport" },
  { id: 9, title: "Théatre" },

] */

export default function ArtGallery() {

  const [cardNumbers, setCardNumbers] = useState(3);
  const [showMore, setShowMore] = useState(true);
  const [isShowModale, setIsShowModale] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const closeModale = () => {
    setIsShowModale(false);
  };
  


  useEffect(() => {

    const fetchData = async () => {

      setLoading(true);

      try {
        const response = await api.get("/card");
        console.log(response.data)
        setData(response.data);
        setLoading(false);

      } catch (err) {
        console.log(err);
        setLoading(false);
      }

    };

    fetchData();

  }, []);

  
  console.log(data)


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


    return (

      <React.Fragment>

        <div className="art-gallery__container">

          <Header />

            <div className='art-gallery__add-card'>
                {/* l'utilisateur clique sur le bouton 'Ajouter un journal' */}
                <button className='art-gallery__add-card-button' onClick={handleAddCard}>+</button>
                <span className='art-gallery__add-card-content'>Ajouter un journal</span>
            </div>

            <div className="art-gallery__card-container">

              {/* Modale d'ajout de Card */}
              {isShowModale &&
                <ModaleCreateCard
                >
                  <CreateCard />
                </ModaleCreateCard>
              }
              
              {/* On affiche les Card (en partant du 1er élément, 
              puis on coupe en fonction de cardNumbers
              si cardNumber = 3 on affiche 3 Card) */}
              {data.slice(0, cardNumbers).map((item) => (
                <Card key={item.id} 
                  id= {item.id} 
                  description={item.description}
                  url={item.url}
                  type={item.type}
                  author={item.author}
                />
              ))}

            </div>

            <div className="art-gallery__button-container">

              {/* Si on a plus de 3 Card à afficher, on affiche le bouton "Afficher plus" */}
              {cardNumbers < data.length && (
                <button className="art-gallery__button art-gallery__button--more" onClick={handleShowMore}>
                  Afficher plus
                </button>
              )}

              {/* Si on a au moins 6 cartes à afficher, on affiche le bouton "Afficher moins" */}
              {cardNumbers >= 6 && (
                <button className="art-gallery__button art-gallery__button--less" onClick={handleShowLess}>
                  Afficher moins
                </button>
              )}

            </div>

        </div>

      </React.Fragment> 
       
    )
}