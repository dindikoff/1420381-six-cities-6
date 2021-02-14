export const getMatchedCard = (cards, match) => cards.find((card) => card.id === parseInt(match.params.id, 10));
export const getNearestCards = (cards) => cards.slice(0, 3);
