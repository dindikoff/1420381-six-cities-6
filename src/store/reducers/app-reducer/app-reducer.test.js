import {appReducer} from './app-reducer';
import {ActionType} from '../../action';

const state = {
  currentCity: `Paris`,
  activeCardId: -1,
  sortedType: `POPULAR`
};

describe(`App Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(appReducer(undefined, {})).toEqual({
      currentCity: `Paris`,
      activeCardId: -1,
      sortedType: `POPULAR`
    });
  });

  it(`Reducer should change city`, () => {
    const changeCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: `Los Angeles`
    };

    expect(appReducer(state, changeCityAction)).toEqual({
      currentCity: `Los Angeles`,
      activeCardId: -1,
      sortedType: `POPULAR`
    });
  });

  it(`Reducer should change active card`, () => {
    const setActiveCard = {
      type: ActionType.SET_ACTIVE_CARD,
      payload: 13
    };

    expect(appReducer(state, setActiveCard)).toEqual({
      currentCity: `Paris`,
      activeCardId: 13,
      sortedType: `POPULAR`
    });
  });

  it(`Reducer should change sort filter type`, () => {
    const setSortFilterType = {
      type: ActionType.SET_SORTED_FILTER_TYPE,
      payload: `LOW_TO_HIGH`
    };

    expect(appReducer(state, setSortFilterType)).toEqual({
      currentCity: `Paris`,
      activeCardId: -1,
      sortedType: `LOW_TO_HIGH`
    });
  });
});
