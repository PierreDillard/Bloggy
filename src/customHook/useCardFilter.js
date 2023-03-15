import { useState, useEffect } from "react";

// custom Hook  pour trier les cartes selon le type

function useCardFilter(cards, type) {
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const cardFilter = cards.filter((card) => card.type === type);
    setFilteredCards(cardFilter);
  }, [cards, type]);

  return filteredCards;
}

export default useCardFilter;
