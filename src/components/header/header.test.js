import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {AuthorizationStatus} from '../../const';
import Header from './header';

const mockStore = configureStore({});

const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    userInfo: ``
  },
});

describe(`Testing Header Component`, () => {
  it(`Header component should work correctly`, () => {
    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Header />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByAltText(`6 cities logo`)).toBeInTheDocument();
  });
});

