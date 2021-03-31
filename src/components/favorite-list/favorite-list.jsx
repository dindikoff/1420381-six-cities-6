import React from 'react';
import FavoriteItems from '../favorite-items/favorite-items';
import {useSelector} from 'react-redux';

const FavoriteList = () => {
  const {favoriteOffers} = useSelector((state) => state.DATA);
  const getCities = [...new Set(favoriteOffers.map((o) => o.city.name))];

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {getCities.map((city) => <FavoriteItems key={city} city={city} favoriteCards={favoriteOffers} />)}
      </ul>
    </section>
  );
};

export default FavoriteList;
