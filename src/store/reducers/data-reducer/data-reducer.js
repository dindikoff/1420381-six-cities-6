import {setOffers, setComments, setNearByOffers} from '../../action';
import {createReducer} from '@reduxjs/toolkit';


const initialState = {
  offers: [],
  nearByOffers: [],
  isOffersLoaded: false,
  comments: [],
};

const dataReducer = createReducer(initialState, (builder) => {
  builder.addCase(setOffers, (state, action) => {
    state.offers = action.payload;
    state.isOffersLoaded = true;
  });

  builder.addCase(setComments, (state, action) => {
    state.comments = action.payload;
  });

  builder.addCase(setNearByOffers, (state, action) => {
    state.nearByOffers = action.payload;
  });
});

export {dataReducer};
