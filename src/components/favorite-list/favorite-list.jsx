import React from 'react';
import PropTypes from 'prop-types';
import FavoriteItems from '../favorite-items/favorite-items';
import {CITIES} from '../../const';
import {OfferType} from '../../typings/offer';

const FavoriteList = ({favoriteCities, getFavorite}) => {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favoriteCities.map((city) => <FavoriteItems key={city} city={city} favoriteCards={getFavorite} />)}
      </ul>
    </section>
  );
};

FavoriteList.propTypes = {
  favoriteCities: PropTypes.arrayOf(PropTypes.oneOf(CITIES)).isRequired,
  getFavorite: PropTypes.arrayOf(OfferType).isRequired
};

export default FavoriteList;
