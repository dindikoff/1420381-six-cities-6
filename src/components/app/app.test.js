import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute} from '../../const';
import App from './app';

const mockStore = configureStore({});

describe(`Test Routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render Main Page when user navigate to '/' url`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
      DATA: {
        offers: [],
        isOffersLoaded: true,
      },
      APP: {
        currentCity: `Paris`,
        activeCardId: -1,
        sortedType: `POPULAR`
      },
    });

    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(/We could not find any property available at the moment in/i)).toBeInTheDocument();
  });

  it(`Render Favorite Page when user navigate to '/favorites' url`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo: {
          email: `savandex@gmail.com`
        }
      },
      DATA: {
        offers: [],
        isFavoriteOffersLoaded: true,
      }
    });

    const history = createMemoryHistory();
    history.push(AppRoute.FAVORITES);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
  });

  it(`Render Login Page when user navigate to '/login' url`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo: {
          email: `savandex@gmail.com`
        }
      }
    });

    const history = createMemoryHistory();
    history.push(AppRoute.LOGIN);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`login-form`)).toBeInTheDocument();
    expect(screen.getByTestId(/email/i)).toBeInTheDocument();
    expect(screen.getByTestId(/Password/i)).toBeInTheDocument();
  });

  it(`Render 404 Page when user navigate to 'wrong address' url`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo: {
          email: ``
        }
      }
    });

    const history = createMemoryHistory();
    history.push(`/something-what-not-exist`);

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});
