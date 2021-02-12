import {RoomType} from '../components/card/card';
import {FEATURES} from '../const';

export const cards = [
  {
    id: 1,
    imagePreview: `img/apartment-01.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`,
      `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    price: 120,
    rating: 4,
    name: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    type: RoomType.apartment,
    roomCount: 3,
    roomCapacity: 4,
    features: FEATURES.slice(0, Math.floor(Math.random() * FEATURES.length)),
    isPremium: false,
    isFavorite: false,
    city: `Amsterdam`,
    host: {
      avatar: `avatar-max.jpg`,
      id: 3,
      isPro: false,
      name: `Angelina`
    }
  },
  {
    id: 2,
    imagePreview: `img/room.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`,
      `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    price: 80,
    rating: 4,
    name: `Wood and stone place`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    type: RoomType.room,
    roomCount: 2,
    roomCapacity: 4,
    features: FEATURES.slice(0, Math.floor(Math.random() * FEATURES.length)),
    isPremium: false,
    isFavorite: true,
    city: `Irvine`,
    host: {
      avatar: `avatar-angelina.jpg`,
      id: 4,
      isPro: true,
      name: `Babalina`
    }
  },
  {
    id: 3,
    imagePreview: `img/apartment-02.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`,
      `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    price: 132,
    rating: 4,
    name: `Canal View Prinsengracht`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    type: RoomType.apartment,
    roomCount: 1,
    roomCapacity: 4,
    features: FEATURES.slice(0, Math.floor(Math.random() * FEATURES.length)),
    isPremium: false,
    isFavorite: true,
    city: `Amsterdam`,
    host: {
      avatar: `avatar-angelina.jpg`,
      id: 5,
      isPro: true,
      name: `Alexandra`
    }
  },
  {
    id: 4,
    imagePreview: `img/apartment-03.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`,
      `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    price: 180,
    rating: 5,
    name: `Nice, cozy, warm big bed apartment`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    type: RoomType.apartment,
    roomCount: 5,
    roomCapacity: 4,
    features: FEATURES.slice(0, Math.floor(Math.random() * FEATURES.length)),
    isPremium: true,
    isFavorite: false,
    city: `Los Angeles`,
    host: {
      avatar: `avatar-max.jpg`,
      id: 6,
      isPro: true,
      name: `Stanis`
    }
  },
  {
    id: 5,
    imagePreview: `img/room.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`,
      `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    price: 80,
    rating: 4,
    name: `Wood and stone place`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: RoomType.room,
    roomCount: 3,
    roomCapacity: 4,
    features: FEATURES.slice(0, Math.floor(Math.random() * FEATURES.length)),
    isPremium: false,
    isFavorite: true,
    city: `Irvine`,
    host: {
      avatar: `avatar-angelina.jpg`,
      id: 7,
      isPro: false,
      name: `denis`
    }
  },
];
