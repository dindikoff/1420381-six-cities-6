import {RoomType} from '../typings/offer';
import {FEATURES} from '../const';
import {comments} from './comment';

export const offers = [
  {
    id: 1,
    imagePreview: `img/apartment-01.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`,
      `img/apartment-03.jpg`, `img/studio-01.jpg`],
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
    comments,
    host: {
      avatar: `avatar-max.jpg`,
      id: 3,
      isPro: false,
      name: `Angelina`
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  {
    id: 2,
    imagePreview: `img/room.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`,
      `img/apartment-03.jpg`, `img/studio-01.jpg`],
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
    comments,
    host: {
      avatar: `avatar-angelina.jpg`,
      id: 4,
      isPro: true,
      name: `Babalina`
    },
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8
    }
  },
  {
    id: 3,
    imagePreview: `img/apartment-02.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`,
      `img/apartment-03.jpg`, `img/studio-01.jpg`],
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
    comments,
    host: {
      avatar: `avatar-angelina.jpg`,
      id: 5,
      isPro: true,
      name: `Alexandra`
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    }
  },
  {
    id: 4,
    imagePreview: `img/apartment-03.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`,
      `img/apartment-03.jpg`, `img/studio-01.jpg`],
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
    comments,
    host: {
      avatar: `avatar-max.jpg`,
      id: 6,
      isPro: true,
      name: `Stanis`
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    }
  },
  {
    id: 5,
    imagePreview: `img/room.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`,
      `img/apartment-03.jpg`, `img/studio-01.jpg`],
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
    comments,
    host: {
      avatar: `avatar-angelina.jpg`,
      id: 7,
      isPro: false,
      name: `denis`
    },
    location: {
      latitude: 52.4009553943508,
      longitude: 4.939309666406198,
      zoom: 8
    }
  },
];
