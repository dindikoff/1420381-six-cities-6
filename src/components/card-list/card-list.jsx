import React, {useState} from 'react';
import Card, {CardType} from '../card/card';
import PropTypes from 'prop-types';

const CardList = ({cards, className, cardClassName, cardClassWrapper, cardSize}) => {
  const [activePage, setActivePage] = useState({
    active: ``
  });

  return (
    <div className={className + ` places__list tabs__content`}>
      {cards.map((card) => <Card card={card} key={card.id} setActivePage={setActivePage} id={activePage} cardClassName={cardClassName} cardClassWrapper={cardClassWrapper} cardSize={cardSize}/>)}
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(CardType).isRequired,
  className: PropTypes.string.isRequired,
  cardClassName: PropTypes.string.isRequired,
  cardClassWrapper: PropTypes.string.isRequired,
  cardSize: PropTypes.exact({
    WIDTH: PropTypes.string.isRequired,
    HEIGHT: PropTypes.string.isRequired
  })
};

export default CardList;
