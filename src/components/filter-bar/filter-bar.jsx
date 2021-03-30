import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {CITIES} from '../../const';
import {changeCity} from '../../store/action';

const FilterBar = () => {
  const {currentCity} = useSelector((state) => state.APP);
  const dispatch = useDispatch();

  const handleCityChange = (city) => dispatch(changeCity(city));

  return (
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((city) => {
              return (
                <li className="locations__item" key={city}>
                  <a onClick={handleCityChange.bind(null, city)} className={`locations__item-link tabs__item ${currentCity === city ? `tabs__item tabs__item--active` : ``}`} href="#">
                    <span>{city}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
};

export default FilterBar;
