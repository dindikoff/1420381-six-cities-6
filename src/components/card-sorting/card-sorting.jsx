import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SortingOption} from '../../const';
import {setSortFilterType} from '../../store/action';

const CardSorting = () => {
  const [initialOffers, setInitialOffers] = useState([]);
  const [optionState, setOptionState] = useState(false);

  const {offers} = useSelector((state) => state.DATA);
  const {sortedType} = useSelector((state) => state.APP);

  const dispatch = useDispatch();

  useEffect(() => {
    if (initialOffers.length === 0) {
      setInitialOffers(offers);
    }
  });

  const handleOpenedFilter = () => {
    setOptionState(!optionState);
  };

  const handleClickFilter = ({target}) => {
    const sortedTypeValue = target.dataset.sortedType;
    setOptionState(false);

    dispatch(setSortFilterType(sortedTypeValue));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={handleOpenedFilter} className="places__sorting-type" tabIndex={0}>
        {SortingOption[sortedType]}
        <svg className="places__sorting-arrow" style={{width: 7, height: 4}}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${optionState ? `places__options--opened` : ``}`}>
        {Object.entries(SortingOption).map(([key, value]) => (
          <li onClick={handleClickFilter} key={key} data-sorted-type={key}
            className={`places__option ${sortedType === key ? `places__option--active` : ``}`} tabIndex={0}>
            {value}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default CardSorting;
