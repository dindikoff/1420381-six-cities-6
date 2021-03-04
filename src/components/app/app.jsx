import React, {useEffect} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import propTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import RoomPage from '../room-page/room-page';
import Page404 from '../page-404/page-404';
import LoadingScreen from '../loading-screen/loading-screen';

import {connect} from 'react-redux';

import {fetchOffersList} from '../../store/api-actions';
import {bindActionCreators} from 'redux';

const App = (props) => {
  const {isOffersLoaded, onLoadData} = props;

  useEffect(() => {
    if (!isOffersLoaded) {
      onLoadData();
    }
  }, [isOffersLoaded]);

  if (!isOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/offer/:id" render={({match}) => (
          <RoomPage id={parseInt(match.params.id, 10)}/>
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
  isOffersLoaded: propTypes.bool.isRequired,
  onLoadData: propTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isOffersLoaded: state.isOffersLoaded,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onLoadData: fetchOffersList
}, dispatch);


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
