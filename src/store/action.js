import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: `app/changeCity`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  SET_ACTIVE_CARD: `app/setActiveCard`,
  SET_SORTED_FILTER_TYPE: `app/setSortFilterType`,
  SET_OFFERS: `data/setOffers`,
  SET_NEAR_BY_OFFERS: `data/setNearByOffers`,
  SET_COMMENTS: `data/setComments`,
  SET_AUTHORIZATION_STATUS: `user/requiredAuthorization`,
  SET_USER_INFO: `user/setUserInfo`,
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => {
  return {
    payload: city
  };
});

export const setSortFilterType = createAction(ActionType.SET_SORTED_FILTER_TYPE, (type) => {
  return {
    payload: type
  };
});

export const setActiveCard = createAction(ActionType.SET_ACTIVE_CARD, (cardId) => {
  return {
    payload: cardId
  };
});

export const setOffers = createAction(ActionType.SET_OFFERS, (offers) => {
  return {
    payload: offers
  };
});

export const setNearByOffers = createAction(ActionType.SET_NEAR_BY_OFFERS, (offers) => {
  return {
    payload: offers
  };
});

export const setAuthorizationStatus = createAction(ActionType.SET_AUTHORIZATION_STATUS, (status) => {
  return {
    payload: status
  };
});

export const setUserInfo = createAction(ActionType.SET_USER_INFO, (info) => {
  return {
    payload: info
  };
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url
  };
});

export const setComments = createAction(ActionType.SET_COMMENTS, (comments) => {
  return {
    payload: comments
  };
});
