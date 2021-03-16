import {setOffers, setComments} from '../../action';
import {createReducer} from '@reduxjs/toolkit';


const initialState = {
  offers: [],
  isOffersLoaded: false,
  comments: [],
};

const appData = createReducer(initialState, (builder) => {
  builder.addCase(setOffers, (state, action) => {
    state.offers = action.payload;
    state.isOffersLoaded = true;
  });

  builder.addCase(setComments, (state, action) => {
    state.comments = action.payload;
  });
});

export {appData};
