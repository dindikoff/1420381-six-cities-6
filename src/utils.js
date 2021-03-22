export const getMatchedOffer = (cards, id) => cards.find((card) => card.id === parseInt(id, 10));

export const getOffersByCity = (city, offers) => {
  return offers.filter((offer) => offer.city.name === city);
};

export const sortOffersFunc = (offers, type) => {
  switch (type) {
    case `POPULAR`:
      return offers;
    case `LOW_TO_HIGH`:
      return offers.slice().sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    case `HIGH_TO_LOW`:
      return offers.slice().sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    case `RATED_FIRST`:
      return offers.slice().sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    default:
      return offers;
  }
};

