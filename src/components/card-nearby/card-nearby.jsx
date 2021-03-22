import React from 'react';
import {useSelector} from 'react-redux';
import CardList from '../card-list/card-list';
import PropTypes from 'prop-types';

const CardNearBy = () => {
  const {nearByOffers} = useSelector((state) => state.DATA);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighborhood</h2>
      <CardList cards={nearByOffers} className={`near-places__list`}
        cardClassName={`near-places__card`} cardImageWrapperClassName={`near-places__image-wrapper`}
        cardImageSize={{width: `260px`, height: `200px`}}
      />
    </section>
  );
};

CardNearBy.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CardNearBy;
