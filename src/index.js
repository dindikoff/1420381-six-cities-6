import React from 'react';
import ReactDOM from 'react-dom';
import {Router as BrowserRouter} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import {redirect} from "./store/middlewares/redirect";
import {createApi} from "./services/api";
import browserHistory from "./browser-history";

import {Provider} from 'react-redux';
import {rootReducer} from './store/reducers/root-reducer';

import App from './components/app/app';
import {getUserData} from './store/api-actions';

const api = createApi();

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
      <BrowserRouter history={browserHistory}>
        <App />,
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);
