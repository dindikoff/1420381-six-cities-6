import {ActionCreator} from './action';
import {adaptToClient} from '../services/adapter';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const adaptedData = data.map((offer) => adaptToClient(offer));
      dispatch(ActionCreator.loadOffers(adaptedData));
    })
);
