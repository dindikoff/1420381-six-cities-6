export const ActionType = {
  CHANGE_CITY: `app/changeCity`,
  SET_OFFERS: `data/setOffers`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  setOffers: (offers) => ({
    type: ActionType.SET_OFFERS,
    payload: offers
  })
};
