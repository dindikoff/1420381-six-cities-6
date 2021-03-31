import React, {useEffect} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import LoadingScreen from '../loading-screen/loading-screen';
import FavoriteList from '../favorite-list/favorite-list';
import FavoriteListEmpty from '../favorite-list-empty/favorite-list-empty';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFavoriteCards} from '../../store/api-actions';

const FavoritesPage = () => {
  const {favoriteOffers, isFavoriteOffersLoaded} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFavoriteOffersLoaded) {
      dispatch(fetchFavoriteCards());
    }

  }, [isFavoriteOffersLoaded]);

  if (!isFavoriteOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffers.length !== 0 ?
            <FavoriteList/>
            : <FavoriteListEmpty/>}
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default FavoritesPage;
