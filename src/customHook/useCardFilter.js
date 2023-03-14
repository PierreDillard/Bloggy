import { useState, useEffect } from "react";

function useCardFilter(cards, type) {
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    const cardFilter = cards.filter((card) => card.type === type);
    setFilteredCards(cardFilter);
  }, [cards, type]);

  return filteredCards;
}

export default useCardFilter;