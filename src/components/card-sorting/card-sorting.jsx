import React, {useState} from 'react';
import {SortingOption} from '../../const';

const CardSorting = () => {
  const [currentFilter, setSortFilter] = useState(`Popular`);

  const handleClickFilter = (evt) => {
    const sortedType = evt.target.dataset.sortedType;
    console.log(sortedType);
    setSortFilter(sortedType);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentFilter}
        <svg className="places__sorting-arrow" style={{width: 7, height: 4}}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Object.entries(SortingOption).map(([key, value]) => (
          <li onClick={handleClickFilter} key={key} data-sorted-type={key}
            className={`places__option ${currentFilter === key ? `places__option--active` : ``}`} tabIndex={0}>
            {value}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default CardSorting;
