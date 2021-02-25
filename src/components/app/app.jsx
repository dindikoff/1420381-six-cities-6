import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import RoomPage from '../room-page/room-page';
import Page404 from '../page404/page404';

const App = () => {
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

export default App;
