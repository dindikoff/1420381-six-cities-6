import PropTypes from 'prop-types';
import React from 'react';
import {CITIES} from '../../const';

const FilterBar = ({onCityChange, currentCity}) => {

  const handleCityChange = (city, evt) => {
    evt.preventDefault();
    onCityChange(city);
  };

  return (
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
  );
};

FilterBar.propTypes = {
  currentCity: PropTypes.oneOf(CITIES).isRequired,
  onCityChange: PropTypes.func.isRequired,
};

export default FilterBar;
