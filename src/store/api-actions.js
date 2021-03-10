import {ActionCreator} from './action';
import {adaptOfferToClient} from '../services/adapter';
import {AuthorizationStatus, ApiRoute} from '../const';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.Offers)
    .then(({data}) => {
      const adaptedData = data.map((offer) => adaptOfferToClient(offer));
      dispatch(ActionCreator.setOffers(adaptedData));
    })
);

export const getUserData = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.Login)
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUserInfo(data));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.Login, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUserInfo(data));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);
