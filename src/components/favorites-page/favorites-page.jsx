import React, {useEffect} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import LoadingScreen from '../loading-screen/loading-screen';
import FavoriteList from '../favorite-list/favorite-list';
import FavoriteListEmpty from '../favorite-list-empty/favorite-list-empty';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFavoriteCards} from '../../store/api-actions';

const FavoritesPage = () => {
  const {offers, favoriteOffers, isFavoriteOffersLoaded} = useSelector((state) => state.DATA);
  const dispatch = useDispatch();

  const favoriteList = offers.length === 0 ?
    favoriteOffers.filter((favorite) => favorite.isFavorite) :
    offers.filter((offer) => offer.isFavorite);

  const getCities = [...new Set(favoriteList.map((o) => o.city.name))];

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
