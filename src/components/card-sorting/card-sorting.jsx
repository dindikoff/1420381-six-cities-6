import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SortingOption} from '../../const';
import {sortOffers} from '../../store/action';
import {sortOffersFunc} from '../../utils';

const CardSorting = () => {
  const [currentFilter, setSortFilter] = useState(`Popular`);
  const [initialOffers, setInitialOffers] = useState([]);
  const [optionState, setOptionState] = useState(false);
  const dispatch = useDispatch();

  const {offers} = useSelector((state) => state.DATA);

  useEffect(() => {
    if (initialOffers.length === 0) {
      setInitialOffers(offers);
    }
  });

  const handleOpenedFilter = () => {
    setOptionState(true);
  };

  const handleClickFilter = ({target}) => {
    const sortedType = target.dataset.sortedType;
    const sortedText = target.textContent;

    setSortFilter(sortedText);
    setOptionState(false);

    dispatch(sortOffers(sortOffersFunc(offers, initialOffers, sortedType)));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={handleOpenedFilter} className="places__sorting-type" tabIndex={0}>
        {currentFilter}
        <svg className="places__sorting-arrow" style={{width: 7, height: 4}}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${optionState ? `places__options--opened` : ``}`}>
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
