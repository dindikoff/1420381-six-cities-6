export const RATING_STAR_PERCENT = 20;
export const CITY_CORDS = {
  Amsterdam: [52.38333, 4.9],
  Paris: [48.8566969, 2.3514616],
  Cologne: [50.938361, 6.959974],
  Brussels: [50.8465573, 4.351697],
  Hamburg: [53.550341, 10.000654],
  Dusseldorf: [51.2254018, 6.7763137]
};

export const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const FEATURES = [`Heating`, `Kitchen`,
  `Cable TV`, `Washing machine`,
  `Coffee machine`, `Dishwasher`];

export const ROOM_TYPE_TO_ROOM_NAME = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  MAIN_PAGE: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER_PAGE: `/offer/:id`,
};

export const ApiRoute = {
  OFFERS: `/hotels/`,
  LOGIN: `/login/`,
  LOGOUT: `/logout/`,
  COMMENTS: `/comments/`,
  FAVORITE: `/favorite/`
};

export const SortingOption = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  RATED_FIRST: `Top rated first`,
};
