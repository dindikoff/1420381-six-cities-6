import React from 'react';
import PropTypes from 'prop-types';
import CardList from "../card-list/card-list";

import {OfferType} from '../../typings/offer';
import {CITIES} from '../../const';

const FavoriteItems = ({favoriteCards, city}) => {
  const filterByCity = favoriteCards.filter((cards) => cards.city.name === city);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <CardList cards={filterByCity}
          cardClassName={`favorites__card`}
          cardImageWrapperClassName={`favorites__image-wrapper`}
          cardImageSize={{width: `150px`, height: `110px`}}
        />
      </div>
    </li>
  );
};

FavoriteItems.propTypes = {
  favoriteCards: PropTypes.arrayOf(OfferType).isRequired,
  city: PropTypes.oneOf(CITIES).isRequired
};

export default FavoriteItems;
