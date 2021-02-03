import React from 'react';
import ReactDOM from 'react-dom';
import {nanoid} from 'nanoid';
import {RoomType} from './components/card/card';

import App from './components/app/app';

const cards = [
  {
    id: nanoid(),
    image: `img/apartment-01.jpg`,
    price: 120,
    rating: 4,
    name: `Beautiful & luxurious apartment at great location`,
    type: RoomType.apartment,
    isPremium: true,
    isFavorite: false,
  },
  {
    id: nanoid(),
    image: `img/room.jpg`,
    price: 80,
    rating: 4,
    name: `Wood and stone place`,
    type: RoomType.room,
    isPremium: false,
    isFavorite: true,
  },
  {
    id: nanoid(),
    image: `img/apartment-02.jpg`,
    price: 132,
    rating: 4,
    name: `Canal View Prinsengracht`,
    type: RoomType.apartment,
    isPremium: false,
    isFavorite: false,
  },
  {
    id: nanoid(),
    image: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    name: `Nice, cozy, warm big bed apartment`,
    type: RoomType.apartment,
    isPremium: true,
    isFavorite: false,
  },
  {
    id: nanoid(),
    image: `img/room.jpg`,
    price: 80,
    rating: 4,
    name: `Wood and stone place`,
    type: RoomType.room,
    isPremium: false,
    isFavorite: true,
  },
];

ReactDOM.render(
    <App
      cards={cards}
    />,
    document.querySelector(`#root`)
);
