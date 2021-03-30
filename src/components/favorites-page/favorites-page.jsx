import React, {useEffect} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import FavoriteItems from '../favorite-items/favorite-items';
import LoadingScreen from '../loading-screen/loading-screen';

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

  const getCities = [...new Set(favoriteOffers.map((o) => o.city.name))];

  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {getCities.map((city) => <FavoriteItems key={city} city={city} favoriteCards={favoriteOffers} />)}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default FavoritesPage;
