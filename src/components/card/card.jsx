import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const RATING_STAR_PERCENT = 20;

export const RoomType = {
  apartment: `apartment`,
  room: `room`,
  house: `house`,
  hotel: `hotel`
};

const typeToText = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`
};

const Card = ({card}) => {
  const {
    name, image,
    price, type,
    isPremium, rating,
    isFavorite, id
  } = card;

  return (
    <article className="cities__place-card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image}
            style={{
              width: `260`,
              height: `200`
            }} alt="Place image">
          </img>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={
            `place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`
          } type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating * RATING_STAR_PERCENT}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/` + id}>{name}</Link>
        </h2>
        <p className="place-card__type">{typeToText[type]}</p>
      </div>
    </article>
  );
};

export const CardType = PropTypes.exact({
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([RoomType.apartment, RoomType.hotel, RoomType.house, RoomType.room]).isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
});

Card.propTypes = {
  card: CardType.isRequired
};

export default Card;
