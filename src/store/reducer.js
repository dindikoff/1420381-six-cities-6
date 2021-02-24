import {ActionType} from './action';
import {offers} from '../mocks/offers';

const initialState = {
  city: `Paris`,
  offers
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
  }

  return state;
};


export {reducer};
