import {changeCity, setActiveCard} from '../../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  currentCity: `Paris`,
};

const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload;
  });
  builder.addCase(setActiveCard, (state, action) => {
    state.activeCardId = action.payload;
  });
});

export {appReducer};
