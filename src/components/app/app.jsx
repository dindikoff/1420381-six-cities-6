import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import {CardType} from '../card/card';

const App = (props) => {
  const {cards} = props;

  return (
    <MainPage cards={cards} />
  );
};

App.propTypes = {
  cards: PropTypes.arrayOf(CardType).isRequired
};

export default App;
