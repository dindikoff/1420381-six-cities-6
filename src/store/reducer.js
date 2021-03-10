import {ActionType} from './action';
import {AuthorizationStatus} from '../const';

const initialState = {
  city: `Paris`,
  offers: [],
  isOffersLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: {},
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
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
  }

  return state;
};


export {reducer};
