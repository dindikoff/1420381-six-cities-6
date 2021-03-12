import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {redirect} from "./store/middlewares/redirect";
import {createApi} from "./services/api";

import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
import {AuthorizationStatus} from './const';

import App from './components/app/app';
import {ActionCreator} from './store/action';
import {getUserData} from './store/api-actions';

const api = createApi(() => store.dispatch(ActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH)));

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(getUserData());

ReactDOM.render(
    <Provider store={store}>
      <App />,
    </Provider>,
    document.querySelector(`#root`)
);
