import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import RoomPage from '../room-page/room-page';
import Page404 from '../page404/Page404';

import {CardType} from '../card/card';
import {CommentType} from '../comment/comment';

const App = (props) => {
  const {cards, comments} = props;
  const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage cards={cards} />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage cards={cards} cities={CITIES}/>
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/offer/:id">
          <RoomPage cards={cards} comments={comments}/>
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cards: PropTypes.arrayOf(CardType).isRequired,
  comments: PropTypes.arrayOf(CommentType).isRequired
};

export default App;
