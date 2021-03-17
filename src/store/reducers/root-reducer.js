import {combineReducers} from 'redux';
import {dataReducer} from './data-reducer/data-reducer';
import {appReducer} from './app-reducer/app-reducer';
import {userReducer} from './user-reducer/user-reducer';

export const NameSpace = {
  APP: `APP`,
  DATA: `DATA`,
  USER: `USER`
};

export const rootReducer = combineReducers({
  [NameSpace.APP]: appReducer,
  [NameSpace.DATA]: dataReducer,
  [NameSpace.USER]: userReducer,
});
