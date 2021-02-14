import React from 'react';
import PropTypes from 'prop-types';
import FilterBar from '../filter-bar/filter-bar';
import Header from '../header/header';
import CardList from '../card-list/card-list';
import {OfferType} from '../../typings/typings';

const MainPage = (props) => {
  const {offers} = props;
  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <FilterBar/>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">312 places to stay in Amsterdam</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" style={{width: 7, height: 4}}>
                      <use xlinkHref="#icon-arrow-select" />
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <CardList cards={offers} className={`cities__places-list`}
                  cardClassName={`cities__place-card`} cardImageWrapperClassName={`cities__image-wrapper`}
                  cardImageSize={{width: `260px`, height: `200px`}}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  offers: PropTypes.arrayOf(OfferType).isRequired,
};

export default MainPage;
