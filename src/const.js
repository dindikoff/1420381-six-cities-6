export const FEATURES = [`Heating`, `Kitchen`,
  `Cable TV`, `Washing machine`,
  `Coffee machine`, `Dishwasher`];

export const CARD_TYPE = {
  FAVORITE: {
    CLASS_NAME: ``,
    CARD_CLASS_NAME: `favorites__card`,
    CLASS_WRAPPER: `favorites__image-wrapper`,
    SIZE: {
      WIDTH: `150px`,
      HEIGHT: `110px`
    }
  },
  NEAR_PLACE: {
    CLASS_NAME: `near-places__list`,
    CARD_CLASS_NAME: `near-places__card`,
    CLASS_WRAPPER: `near-places__image-wrapper`,
    SIZE: {
      WIDTH: `260px`,
      HEIGHT: `200px`
    }
  },
  CITIES: {
    CLASS_NAME: `cities__places-list`,
    CARD_CLASS_NAME: `cities__place-card`,
    CLASS_WRAPPER: `cities__image-wrapper`,
    SIZE: {
      WIDTH: `260px`,
      HEIGHT: `200px`
    }
  }
};

export const RATING_STAR_PERCENT = 20;
