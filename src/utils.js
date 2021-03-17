export const getMatchedOffer = (cards, id) => cards.find((card) => card.id === parseInt(id, 10));

export const getOffersByCity = (city, offers) => {
  return offers.filter((offer) => offer.city.name === city);
};
