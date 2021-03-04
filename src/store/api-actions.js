import {ActionCreator} from './action';
import {adaptOfferToClient} from '../services/adapter';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const adaptedData = data.map((offer) => adaptOfferToClient(offer));
      dispatch(ActionCreator.setOffers(adaptedData));
    })
);
