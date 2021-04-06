import {ActionType} from '../../action';
import {userReducer} from './user-reducer';
import {AuthorizationStatus} from '../../../const';

const state = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: {},
};

const userInfo = {
  id: 1,
  email: `savandex@gmail.com`,
  name: `savandex`,
  avatarUrl: `https://assets.htmlacademy.ru…tar/5.jpg`,
  isPro: false
};

describe(`User Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(userReducer(undefined, {})).toEqual(state);
  });

  it(`Reducer should change auth status`, () => {
    const changeAuthStatus = {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: AuthorizationStatus.AUTH
    };

    expect(userReducer(state, changeAuthStatus)).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      userInfo: {},
    });
  });

  it(`Reducer should set user info`, () => {
    const setUserInfo = {
      type: ActionType.SET_USER_INFO,
      payload: userInfo
    };

    expect(userReducer(state, setUserInfo)).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userInfo
    });
  });
});
