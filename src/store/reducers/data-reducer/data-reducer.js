import {setOffers, setComments,
  setNearByOffers, sortOffers,
  setOneOffer, updateCardByFavoriteStatus,
  setFavoriteOffers, resetFavoriteStatus} from '../../action';
import {createReducer} from '@reduxjs/toolkit';


const initialState = {
  offers: [],
  oneOffer: [],
  nearByOffers: [],
  favoriteOffers: [],
  isFavoriteOffersLoaded: false,
  isOffersLoaded: false,
  isOneOfferLoaded: false,
  comments: [],
};

const dataReducer = createReducer(initialState, (builder) => {
  builder.addCase(setOffers, (state, action) => {
    state.offers = action.payload;
    state.isOffersLoaded = true;
  });

  builder.addCase(setOneOffer, (state, action) => {
    state.oneOffer = action.payload;
    state.isOneOfferLoaded = true;
  });

  builder.addCase(setFavoriteOffers, (state, action) => {
    state.favoriteOffers = action.payload;
    state.isFavoriteOffersLoaded = true;
  });

  builder.addCase(resetFavoriteStatus, (state, action) => {
    state.isFavoriteOffersLoaded = action.payload;
  });

  builder.addCase(setComments, (state, action) => {
    state.comments = action.payload;
  });

  builder.addCase(setNearByOffers, (state, action) => {
    state.nearByOffers = action.payload;
  });
  builder.addCase(sortOffers, (state, action) => {
    state.offers = action.payload;
  });

  builder.addCase(updateCardByFavoriteStatus, (state, action) => {
    state.offers = state.offers.map((offer) => (offer.id === action.payload.id) ? action.payload : offer);
  });
});

export {dataReducer};
