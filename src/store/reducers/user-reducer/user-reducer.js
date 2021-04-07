import {createReducer} from '@reduxjs/toolkit';
import {setUserInfo} from '../../action';
import {AuthorizationStatus} from '../../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: {},
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserInfo, (state, action) => {
    state.userInfo = action.payload;
    state.authorizationStatus = AuthorizationStatus.AUTH;
  });
});

export {userReducer};
