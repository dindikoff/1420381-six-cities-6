import React, {useState} from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import {OfferType} from '../../typings/typings';

const CardList = ({cards, className, cardClassName, cardImageWrapperClassName, cardImageSize}) => {
  const [activeCard, setActiveCard] = useState(``);

  const handleActivityChange = (id) => {
    setActiveCard({active: id});
  };

  return (
    <div className={className + ` places__list tabs__content`}>
      {cards.map((card) => <Card card={card} key={card.id} onActivityChange={handleActivityChange} id={activeCard} cardClassName={cardClassName} cardImageWrapperClassName={cardImageWrapperClassName} cardImageSize={cardImageSize}/>)}
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
