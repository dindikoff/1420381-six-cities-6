import React, {useEffect} from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import propTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import RoomPage from '../room-page/room-page';
import Page404 from '../page-404/page-404';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";

import {connect} from 'react-redux';

import {fetchOffersList} from '../../store/api-actions';
import {bindActionCreators} from 'redux';
import {AppRoute} from '../../const';

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
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN_PAGE}>
          <MainPage />
        </Route>
        <PrivateRoute exact path={AppRoute.FAVORITES} render={() => <FavoritesPage/> }></PrivateRoute>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <Route exact path={`${AppRoute.OFFER_PAGE}`} render={({match}) => (
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
