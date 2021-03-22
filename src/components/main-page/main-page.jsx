import React, {useMemo} from 'react';
import FilterBar from '../filter-bar/filter-bar';
import Header from '../header/header';
import CardList from '../card-list/card-list';
import CardSorting from '../card-sorting/card-sorting';
import Map from '../map/map';
import {sortOffersFunc} from '../../utils';

import {useSelector, useDispatch} from 'react-redux';
import {changeCity} from '../../store/action';
import {getOffersByCity} from '../../utils';

const MainPage = () => {
  const {currentCity, activeCardId, sortedType} = useSelector((state) => state.APP);
  const {offers} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  const sortedOffers = useMemo(() => sortOffersFunc(offers, sortedType), [offers, sortedType]);
  let cityOffers = useMemo(() => getOffersByCity(currentCity, sortedOffers), [currentCity, sortedOffers]);

  const handleCityChange = (city) => dispatch(changeCity(city));

  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <FilterBar onCityChange={handleCityChange} currentCity={currentCity}/>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityOffers.length} places to stay in {currentCity}</b>
                <CardSorting/>
                <CardList cards={cityOffers} className={`cities__places-list`}
                  cardClassName={`cities__place-card`} cardImageWrapperClassName={`cities__image-wrapper`}
                  cardImageSize={{width: `260px`, height: `200px`}}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map currentCity={currentCity} offers={cityOffers} activeCardId={activeCardId}/>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
