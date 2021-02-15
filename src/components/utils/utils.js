export const getMatchedOffer = (cards, match) => cards.find((card) => card.id === parseInt(match.params.id, 10));
export const getNearestOffers = (cards) => cards.slice(0, 3);
