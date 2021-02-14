import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import RoomPage from '../room-page/room-page';
import Page404 from '../page404/page404';

import {OfferType} from '../../typings/typings';
import {CommentType} from '../comment/comment';
import PropTypes from 'prop-types';
import {getMatchedCard, getNearestCards} from '../utils/utils';

const App = (props) => {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage offers={offers} />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage offers={offers}/>
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/offer/:id" render={({match}) => (
          <RoomPage card={getMatchedCard(offers, match)}
            nearestPlaces={getNearestCards(offers)}/>
        )}>
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(OfferType).isRequired,
  comments: PropTypes.arrayOf(CommentType).isRequired
};

export default App;
