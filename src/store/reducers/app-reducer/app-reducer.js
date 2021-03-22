import {changeCity, setActiveCard, setSortFilterType} from '../../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  currentCity: `Paris`,
  activeCardId: -1,
  sortedType: `POPULAR`
};

const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload;
  });
  builder.addCase(setActiveCard, (state, action) => {
    state.activeCardId = action.payload;
  });
  builder.addCase(setSortFilterType, (state, action) => {
    state.sortedType = action.payload;
  });
});

export {appReducer};
