import MockAdapter from 'axios-mock-adapter';
import {createApi} from '../../../services/api';
import {ActionType} from '../../action';
import {getUserData, login} from '../../api-actions';
import {userReducer} from './user-reducer';
import {ApiRoute, AuthorizationStatus} from '../../../const';

const api = createApi(() => {});

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

  it(`Reducer should set user info and auth status`, () => {
    const setUserInfo = {
      type: ActionType.SET_USER_INFO,
      payload: userInfo
    };

    expect(userReducer(state, setUserInfo)).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      userInfo: {
        id: 1,
        email: `savandex@gmail.com`,
        name: `savandex`,
        avatarUrl: `https://assets.htmlacademy.ru…tar/5.jpg`,
        isPro: false
      }
    });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login (getInfo)`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getUserInfoLoader = getUserData();

    apiMock.onGet(ApiRoute.LOGIN).reply(200, [userInfo]);

    return getUserInfoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_INFO,
          payload: [userInfo]
        });
      });
  });

  it(`Should make a correct API call to /login (auth)`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@test.ru`, password: `123`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(ApiRoute.LOGIN)
      .reply(200, [userInfo]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_INFO,
          payload: [userInfo]
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: ApiRoute.MAIN
        });
      });
  });
});
