import React from 'react';
import Header from '../header/header';
import PropTypes from 'prop-types';
import {RATING_STAR_PERCENT, CARD_TYPE} from '../../const';
import {nanoid} from 'nanoid';
import {CardType} from '../card/card';
import {CommentType} from "../comment/comment";
import CommentsList from '../comments-list/comments-list';
import CardList from "../card-list/card-list";
import {useHistory, useLocation} from 'react-router-dom';

const RoomPage = ({cards, comments}) => {
  const history = useHistory();
  const location = useLocation();

  const CURRENT_CARD_ID = location.pathname.substring(7);
  const currentCard = cards.find((card) => {
    return card.id === parseInt(CURRENT_CARD_ID, 10);
  });

  if (!currentCard) {
    history.push(`/page-not-found`);
    return ``;
  }
  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {currentCard.images.map((image) => {
                return (
                  <div className="property__image-wrapper" key={nanoid()}>
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {currentCard.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentCard.name}
                </h1>
                <button className={currentCard.isFavorite ? `property__bookmark-button property__bookmark-button--active button` : `property__bookmark-button button`} type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">{currentCard.isFavorite ? `In bookmarks` : `To bookmarks`}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: currentCard.rating * RATING_STAR_PERCENT + `%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentCard.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {currentCard.type.charAt(0).toUpperCase() + currentCard.type.slice(1)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentCard.roomCount} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentCard.roomCapacity} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{currentCard.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              {currentCard.features.length !== 0 ?
                <div className="property__inside">
                  <h2 className="property__inside-title">`What&apos;s inside`</h2>
                  <ul className="property__inside-list">

                    {currentCard.features.map((card) => {
                      return (
                        <li key={nanoid()} className="property__inside-item">
                          {card}
                        </li>
                      );
                    })}
                  </ul>
                </div> :
                ``
              }
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={`img/` + currentCard.host.avatar} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {currentCard.host.name}
                  </span>
                  <span className="property__user-status">
                    {currentCard.host.isPro ? `Pro` : ``}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentCard.description}
                  </p>
                </div>
              </div>
              <CommentsList comments={comments}/>
            </div>
          </div>
          <section className="property__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <CardList cards={cards.slice(0, 3)} className={CARD_TYPE.NEAR_PLACE.CLASS_NAME}
              cardClassName={CARD_TYPE.NEAR_PLACE.CARD_CLASS_NAME} cardClassWrapper={CARD_TYPE.NEAR_PLACE.CLASS_WRAPPER}
              cardSize={CARD_TYPE.NEAR_PLACE.SIZE}
            />
          </section>
        </div>
      </main>

    </React.Fragment>
  );
};

export default RoomPage;

RoomPage.propTypes = {
  cards: PropTypes.arrayOf(CardType).isRequired,
  comments: PropTypes.arrayOf(CommentType).isRequired
};
