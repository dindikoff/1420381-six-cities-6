import React from 'react';
import {useSelector} from 'react-redux';
import Header from '../header/header';
import FilterBar from '../filter-bar/filter-bar';

const MainEmpty = () => {
  const {currentCity} = useSelector((state) => state.APP);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index page__main--index-empty">
        <FilterBar />
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainEmpty;
