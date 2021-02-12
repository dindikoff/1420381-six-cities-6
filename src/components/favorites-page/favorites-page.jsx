import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import CardList from "../card-list/card-list";
import {CARD_TYPE} from "../../const";
import PropTypes from "prop-types";
import {CardType} from "../card/card";

const FavoritesPage = ({cards}) => {
  const favoriteCards = cards.filter((card) => {
    return card.isFavorite === true;
  });

  return (
    <React.Fragment>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <CardList cards={favoriteCards}
                    className={CARD_TYPE.FAVORITE.CLASS_NAME}
                    cardClassName={CARD_TYPE.FAVORITE.CARD_CLASS_NAME}
                    cardClassWrapper={CARD_TYPE.FAVORITE.CLASS_WRAPPER}
                    cardSize={CARD_TYPE.FAVORITE.SIZE}
                  />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </React.Fragment>
  );
};

FavoritesPage.propTypes = {
  cards: PropTypes.arrayOf(CardType).isRequired,
};

export default FavoritesPage;
