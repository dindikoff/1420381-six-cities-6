export const ActionType = {
  CHANGE_CITY: `/change-city`,
  FILL_THE_OFFERS_LIST: `fill-the-offers-list`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  fillTheOffersList: () => ({
    type: ActionType.FILL_THE_OFFERS_LIST
  }),
};
