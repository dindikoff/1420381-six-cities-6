import React, {useEffect} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import LoadingScreen from '../loading-screen/loading-screen';
import FavoriteList from '../favorite-list/favorite-list';
import FavoriteListEmpty from '../favorite-list-empty/favorite-list-empty';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFavoriteCards} from '../../store/api-actions';

const FavoritesPage = () => {
  const {offers, isFavoriteOffersLoaded} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();
  const isOffersEmpty = offers.length === 0 || undefined;

  const favoriteList = offers.filter((offer) => offer.isFavorite);
  const getCities = [...new Set(favoriteList.map((o) => o.city.name))];

  useEffect(() => {
    if (!isFavoriteOffersLoaded && isOffersEmpty) {
      dispatch(fetchFavoriteCards());
    }

  }, [isFavoriteOffersLoaded, offers]);

  if (!isFavoriteOffersLoaded && isOffersEmpty) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteList.length !== 0 ?
            <FavoriteList getCities={getCities} getFavorite={favoriteList}/>
            : <FavoriteListEmpty/>}
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default FavoritesPage;
