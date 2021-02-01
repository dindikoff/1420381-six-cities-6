import React from 'react';
import propTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {cards} = props;

  return (
    <MainPage cards={cards} />
  );
};

App.propTypes = {
  cards: propTypes.array
};

export default App;
