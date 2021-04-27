import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import LoginPage from './login-page';
import {AuthorizationStatus} from '../../const';

const mockStore = configureStore({});

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.AUTH},
});

jest.mock(`../header/header`, () => `header`);
jest.mock(`../footer/footer`, () => `footer`);

describe(`Testing Login page`, () => {
  it(`Render 'AuthScreen' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    history.push(`/login`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <LoginPage />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByTestId(`login-form`)).toBeInTheDocument();

    userEvent.type(screen.getByTestId(`email`), `heyho@mail.ru`);
    userEvent.type(screen.getByTestId(`password`), `123`);

    expect(screen.getByTestId(`email`)).toBeInTheDocument();
    expect(screen.getByTestId(`password`)).toBeInTheDocument();
  });
});
