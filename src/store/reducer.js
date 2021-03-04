import {ActionType} from './action';

const initialState = {
  city: `Paris`,
  offers: [],
  isOffersLoaded: false,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case ActionType.SET_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isOffersLoaded: true
      };
  }

  return state;
};


export {reducer};
