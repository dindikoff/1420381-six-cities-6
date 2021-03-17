import {combineReducers} from 'redux';
import {appData} from './app-data/app-data';
import {appProcess} from './app-process/app-process';
import {user} from './user/user';

export const NameSpace = {
  APP: `APP`,
  DATA: `DATA`,
  USER: `USER`
};

export const rootReducer = combineReducers({
  [NameSpace.APP]: appProcess,
  [NameSpace.DATA]: appData,
  [NameSpace.USER]: user,
});
