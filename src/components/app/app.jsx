import React, {useEffect} from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import RoomPage from '../room-page/room-page';
import Page404 from '../page-404/page-404';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from "../../browser-history";
import {useSelector, useDispatch} from 'react-redux';
import {fetchOffersList} from '../../store/api-actions';
import {AppRoute} from '../../const';

const App = () => {
  const {isOffersLoaded} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isOffersLoaded) {
      dispatch(fetchOffersList());
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

export default App;
