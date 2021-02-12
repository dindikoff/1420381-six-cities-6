import React from 'react';
import PropTypes, {number} from 'prop-types';
import {Link} from 'react-router-dom';
import {RATING_STAR_PERCENT} from '../../const';

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

const Card = ({card, setActivePage, cardClassName, cardClassWrapper, cardSize}) => {
  const {
    name, imagePreview,
    price, type,
    isPremium, rating,
    isFavorite, id
  } = card;

  const handleMouseActive = () => {
    setActivePage({active: id});
  };

  const handleMouseLeave = () => {
    setActivePage({active: ``});
  };

  return (
    <article className={cardClassName + ` place-card`} onMouseEnter={handleMouseActive} onMouseLeave={handleMouseLeave}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={cardClassWrapper + ` place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={imagePreview}
            style={{
              width: cardSize.WIDTH,
              height: cardSize.HEIGHT
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
            <span style={{width: rating * RATING_STAR_PERCENT + `%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/` + id} >{name}</Link>
        </h2>
        <p className="place-card__type">{typeToText[type]}</p>
      </div>
    </article>
  );
};

export const CardType = PropTypes.exact({
  id: number,
  imagePreview: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf([RoomType.apartment, RoomType.hotel, RoomType.house, RoomType.room]).isRequired,
  roomCount: PropTypes.number.isRequired,
  roomCapacity: PropTypes.number.isRequired,
  features: PropTypes.array.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  host: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  })
});

Card.propTypes = {
  card: CardType.isRequired,
  setActivePage: PropTypes.func.isRequired,
  cardClassName: PropTypes.string.isRequired,
  cardClassWrapper: PropTypes.string.isRequired,
  cardSize: PropTypes.exact({
    WIDTH: PropTypes.string.isRequired,
    HEIGHT: PropTypes.string.isRequired
  })
};

export default Card;
