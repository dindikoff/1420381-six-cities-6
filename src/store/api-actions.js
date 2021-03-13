import {ActionCreator} from './action';
import {adaptOfferToClient, adaptCommentToClient} from '../services/adapter';
import {AuthorizationStatus, ApiRoute} from '../const';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.OFFERS)
    .then(({data}) => {
      const adaptedData = data.map((offer) => adaptOfferToClient(offer));
      dispatch(ActionCreator.setOffers(adaptedData));
    })
);

export const getUserData = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUserInfo(data));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setUserInfo(data));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.COMMENTS}${id}`)
    .then(({data}) => {
      const adaptedData = data.map((comment) => adaptCommentToClient(comment));
      dispatch(ActionCreator.setComments(adaptedData));
    })
);
