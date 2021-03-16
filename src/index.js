import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {redirect} from "./store/middlewares/redirect";
import {createApi} from "./services/api";

import {Provider} from 'react-redux';
import {rootReducer} from './store/reducers/root-reducer';
import {AuthorizationStatus} from './const';

import App from './components/app/app';
import {setAuthorizationStatus} from './store/action';
import {getUserData} from './store/api-actions';

const api = createApi(() => store.dispatch(setAuthorizationStatus(AuthorizationStatus.NO_AUTH)));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(getUserData());

ReactDOM.render(
    <Provider store={store}>
      <App />,
    </Provider>,
    document.querySelector(`#root`)
);
