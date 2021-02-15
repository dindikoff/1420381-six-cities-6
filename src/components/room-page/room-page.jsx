import React from 'react';
import Header from '../header/header';
import CommentsList from '../comments-list/comments-list';
import CardList from '../card-list/card-list';
import Page404 from '../page404/page404';

import PropTypes from 'prop-types';
import {RATING_STAR_PERCENT, ROOM_TYPE_TO_ROOM_NAME} from '../../const';
import {OfferType} from '../../typings/offer';

const RoomPage = ({offer, nearestPlaces}) => {
  if (!offer) {
    return <Page404 />;
  }
  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((image) => {
                return (
                  <div className="property__image-wrapper" key={image}>
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.name}
                </h1>
                <button className={offer.isFavorite ? `property__bookmark-button property__bookmark-button--active button` : `property__bookmark-button button`} type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">{offer.isFavorite ? `In bookmarks` : `To bookmarks`}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: offer.rating * RATING_STAR_PERCENT + `%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {ROOM_TYPE_TO_ROOM_NAME[offer.type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.roomCount} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.roomCapacity} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              {offer.features.length !== 0 ?
                <div className="property__inside">
                  <h2 className="property__inside-title">`What&apos;s inside`</h2>
                  <ul className="property__inside-list">

                    {offer.features.map((feature) => {
                      return (
                        <li key={feature} className="property__inside-item">
                          {feature}
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
                    <img className="property__avatar user__avatar" src={`img/` + offer.host.avatar} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  <span className="property__user-status">
                    {offer.host.isPro ? `Pro` : ``}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <CommentsList comments={offer.comments}/>
            </div>
          </div>
          <section className="property__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <CardList cards={nearestPlaces} className={`near-places__list`}
              cardClassName={`near-places__card`} cardImageWrapperClassName={`near-places__image-wrapper`}
              cardImageSize={{width: `260px`, height: `200px`}}
            />
          </section>
        </div>
      </main>

    </React.Fragment>
  );
};

export default RoomPage;

RoomPage.propTypes = {
  offer: OfferType,
  nearestPlaces: PropTypes.arrayOf(OfferType),
};
