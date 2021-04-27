import {setOffers, setComments,
  setNearByOffers, sortOffers,
  setOneOffer, updateCardByFavoriteStatus,
  setFavoriteOffers} from '../../action';
import {createReducer} from '@reduxjs/toolkit';


const initialState = {
  offers: [],
  nearByOffers: [],
  isFavoriteOffersLoaded: false,
  isOffersLoaded: false,
  isOneOfferLoaded: false,
  isCommentsLoaded: false,
  isOfferNearByLoaded: false,
  comments: [],
};

const dataReducer = createReducer(initialState, (builder) => {
  builder.addCase(setOffers, (state, action) => {
    state.offers = action.payload;
    state.isOffersLoaded = true;
  });

  builder.addCase(setOneOffer, (state, action) => {
    state.offers = action.payload;
    state.isOneOfferLoaded = true;
  });

  builder.addCase(setFavoriteOffers, (state, action) => {
    state.offers = action.payload;
    state.isFavoriteOffersLoaded = true;
  });

  builder.addCase(setComments, (state, action) => {
    state.comments = action.payload;
    state.isCommentsLoaded = true;
  });

  builder.addCase(setNearByOffers, (state, action) => {
    state.nearByOffers = action.payload;
    state.isOfferNearByLoaded = true;
  });
  builder.addCase(sortOffers, (state, action) => {
    state.offers = action.payload;
  });

  builder.addCase(updateCardByFavoriteStatus, (state, action) => {
    state.offers = state.offers.map((offer) => (offer.id === action.payload.id) ? action.payload : offer);
  });
});

export {dataReducer};
