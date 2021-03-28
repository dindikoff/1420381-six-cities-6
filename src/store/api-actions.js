import {setAuthorizationStatus, setUserInfo, setComments, setOffers, setOneOffer, redirectToRoute, setNearByOffers} from './action';
import {adaptOfferToClient, adaptCommentToClient} from '../services/adapter';
import {AuthorizationStatus, ApiRoute} from '../const';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.OFFERS)
    .then(({data}) => {
      const adaptedData = data.map((offer) => adaptOfferToClient(offer));
      dispatch(setOffers(adaptedData));
    })
);

export const getUserData = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(({data}) => {
      dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(setUserInfo(data));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(setUserInfo(data));
    })
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.COMMENTS}${id}`)
    .then(({data}) => {
      const adaptedData = data.map((comment) => adaptCommentToClient(comment));
      dispatch(setComments(adaptedData));
    })
);

export const sendComment = ({id, rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.COMMENTS}${id}`, {rating, comment})
    .then(({data}) => {
      const adaptedData = data.map(adaptCommentToClient);
      dispatch(setComments(adaptedData));
    })
);

export const fetchOffersNearBy = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.OFFERS}${id}/nearby`)
    .then(({data}) => {
      const adaptedData = data.map((offer) => adaptOfferToClient(offer));
      dispatch(setNearByOffers(adaptedData));
    })
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.OFFERS}${id}`)
    .then(({data}) => {
      const adaptedData = adaptOfferToClient(data);
      dispatch(setOneOffer(new Array(adaptedData)));
    }).catch(() => dispatch(redirectToRoute(`/page404/`)))
);
