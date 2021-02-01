import React from 'react';
import propTypes from 'prop-types';

const isPremium = (premium = false) => {
  return (
    premium ?
      <div className="place-card__mark">
        <span>Premium</span>
      </div> : ``);
};

const Card = (props) => {
  const {card} = props;
  const {name, image, price, type, premium} = card;

  return (
    <article className="cities__place-card place-card">
      {isPremium(premium)}
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
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  card: propTypes.object
};

export default Card;
