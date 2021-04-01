import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {RATING_STAR_PERCENT, ROOM_TYPE_TO_ROOM_NAME} from '../../const';
import {OfferType} from '../../typings/offer';
import {useFavoriteButtonHandler} from '../../hooks/use-favorite-button-handler';

const Card = ({card, onActivityChange, cardClassName, cardImageWrapperClassName, cardImageSize}) => {
  const {
    title, imagePreview,
    price, type,
    isPremium, rating,
    isFavorite, id,
  } = card;

  const [handleFavoriteButtonClick] = useFavoriteButtonHandler(id, isFavorite);

  const handleCardMouseEnter = () => {
    onActivityChange(id);
  };

  const handleCardMouseLeave = () => {
    onActivityChange(-1);
  };

  return (
    <article className={`${cardClassName} place-card`} onMouseEnter={handleCardMouseEnter} onMouseLeave={handleCardMouseLeave}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={cardImageWrapperClassName + ` place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={imagePreview}
            style={{
              width: cardImageSize.width,
              height: cardImageSize.height
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
          <button onClick={handleFavoriteButtonClick} className={
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
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{ROOM_TYPE_TO_ROOM_NAME[type]}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  card: OfferType.isRequired,
  onActivityChange: PropTypes.func.isRequired,
  cardClassName: PropTypes.string.isRequired,
  cardImageWrapperClassName: PropTypes.string.isRequired,
  cardImageSize: PropTypes.exact({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  })
};

export default Card;
