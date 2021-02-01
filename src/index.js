import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

const Cards = [
  {
    image: `img/apartment-01.jpg`,
    price: 120,
    rating: 4,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    premium: true,
  },
  {
    image: `img/room.jpg`,
    price: 80,
    rating: 4,
    name: `Wood and stone place`,
    type: `Private room`,
    premium: false,
  },
  {
    image: `img/apartment-02.jpg`,
    price: 132,
    rating: 4,
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
    premium: false,
  },
  {
    image: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    premium: false,
  },
  {
    image: `img/room.jpg`,
    price: 80,
    rating: 4,
    name: `Wood and stone place`,
    type: `Private room`,
    premium: false,
  },
];

ReactDOM.render(
    <App
      cards={Cards}
    />,
    document.querySelector(`#root`)
);
