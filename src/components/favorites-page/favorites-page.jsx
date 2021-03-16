import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import CardList from "../card-list/card-list";

import {useSelector} from 'react-redux';

const FavoritesPage = () => {

  const {offers} = useSelector((state) => state.DATA);

  const favoriteCards = offers.filter((card) => {
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
                    cardClassName={`favorites__card`}
                    cardImageWrapperClassName={`favorites__image-wrapper`}
                    cardImageSize={{width: `150px`, height: `110px`}}
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

export default FavoritesPage;
