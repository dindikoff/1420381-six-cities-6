import React, {useEffect, useMemo} from 'react';
import FilterBar from '../filter-bar/filter-bar';
import Header from '../header/header';
import CardList from '../card-list/card-list';
import CardSorting from '../card-sorting/card-sorting';
import Map from '../map/map';
import MainEmpty from '../main-empty/main-empty';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchOffersList} from '../../store/api-actions';
import {sortOffersFunc} from '../../utils';

import {useSelector, useDispatch} from 'react-redux';
import {getOffersByCity} from '../../utils';

const MainPage = () => {
  const {currentCity, activeCardId, sortedType} = useSelector((state) => state.APP);
  const {offers, isOffersLoaded} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  const sortedOffers = useMemo(() => sortOffersFunc(offers, sortedType), [offers, sortedType]);
  let cityOffers = useMemo(() => getOffersByCity(currentCity, sortedOffers), [currentCity, sortedOffers]);


  useEffect(() => {
    if (!isOffersLoaded) {
      dispatch(fetchOffersList());
    }

  }, [isOffersLoaded]);

  if (!isOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  if (cityOffers.length === 0) {
    return (
      <MainEmpty />
    );
  }

  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <FilterBar />
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
