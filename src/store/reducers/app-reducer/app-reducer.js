import {changeCity} from '../../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  currentCity: `Paris`,
};

const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload;
  });
});

export {appReducer};
