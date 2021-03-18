import React from 'react';
import {useDispatch} from 'react-redux';
import Card from '../card/card';
import PropTypes from 'prop-types';
import {OfferType} from '../../typings/offer';
import {setActiveCard} from '../../store/action';

const CardList = ({cards, className, cardClassName, cardImageWrapperClassName, cardImageSize}) => {
  const dispatch = useDispatch();

  const handleActivityChange = (id) => {
    dispatch(setActiveCard(id));
  };

  return (
    <div className={className + ` places__list tabs__content`}>
      {cards.map((card) => <Card card={card} key={card.id} onActivityChange={handleActivityChange} cardClassName={cardClassName} cardImageWrapperClassName={cardImageWrapperClassName} cardImageSize={cardImageSize}/>)}
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(OfferType).isRequired,
  className: PropTypes.string,
  cardClassName: PropTypes.string.isRequired,
  cardImageWrapperClassName: PropTypes.string.isRequired,
  cardImageSize: PropTypes.exact({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  }).isRequired
};

export default CardList;
