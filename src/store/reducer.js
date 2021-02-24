import {ActionType} from './action';
import {offers} from '../mocks/offers';
import {getOffersByCity} from '../utils';

const initialState = {
  city: `Paris`,
  offers: getOffersByCity(`Paris`, offers),
  allOffers: offers,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case ActionType.FILL_THE_OFFERS_LIST:
      return {
        ...state,
        offers: getOffersByCity(state.city, offers)
      };
  }

  return state;
};


export {reducer};
