import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import RoomPage from '../room-page/room-page';
import Page404 from '../page404/Page404';

import {CardType} from '../card/card';


const App = (props) => {
  const {cards} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage cards={cards} />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/offer/:id">
          <RoomPage />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cards: PropTypes.arrayOf(CardType).isRequired
};

export default App;
