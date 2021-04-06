import {dataReducer} from './data-reducer';
import {ActionType} from '../../action';

const state = {
  offers: [],
  nearByOffers: [],
  isFavoriteOffersLoaded: false,
  isOffersLoaded: false,
  isOneOfferLoaded: false,
  comments: [],
};

const offer = {
  id: 1,
  images: `offer.images`,
  price: 0,
  rating: 0,
  title: ``,
  type: ``,
  city: {
    name: ``
  },
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
  description: ``,
  roomCount: ``,
  features: [],
  host: {
    avatar: ``,
    id: 2,
    isPro: false,
    name: ``,
  },
  isFavorite: false,
  isPremium: false,
  roomCapacity: 0,
  imagePreview: ``,
};

const offers = [
  {
    id: 1,
    images: `offer.images`,
    price: 0,
    rating: 0,
    title: ``,
    type: ``,
    city: {
      name: ``
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    description: ``,
    roomCount: ``,
    features: [],
    host: {
      avatar: ``,
      id: 2,
      isPro: false,
      name: ``,
    },
    isFavorite: false,
    isPremium: false,
    roomCapacity: 0,
    imagePreview: ``,
  },
  {
    id: 2,
    images: `offer.images`,
    price: 0,
    rating: 0,
    title: ``,
    type: ``,
    city: {
      name: ``
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    description: ``,
    roomCount: ``,
    features: [],
    host: {
      avatar: ``,
      id: 2,
      isPro: false,
      name: ``,
    },
    isFavorite: false,
    isPremium: false,
    roomCapacity: 0,
    imagePreview: ``,
  },
  {
    id: 3,
    images: `offer.images`,
    price: 0,
    rating: 0,
    title: ``,
    type: ``,
    city: {
      name: ``
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    description: ``,
    roomCount: ``,
    features: [],
    host: {
      avatar: ``,
      id: 2,
      isPro: false,
      name: ``,
    },
    isFavorite: false,
    isPremium: false,
    roomCapacity: 0,
    imagePreview: ``,
  }
];

const comments = [
  {
    text: `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
    date: `2021-02-10T08:04:28.647Z`,
    id: 1,
    rating: 3
  },
  {
    text: `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
    date: `2021-02-10T08:04:28.647Z`,
    id: 2,
    rating: 4
  },
  {
    text: `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
    date: `2021-02-10T08:04:28.647Z`,
    id: 3,
    rating: 1
  }
];

describe(`Data Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(dataReducer(undefined, {})).toEqual(state);
  });

  it(`Reducer should set offers`, () => {
    const setOffers = {
      type: ActionType.SET_OFFERS,
      payload: offers
    };

    expect(dataReducer(state, setOffers)).toEqual({
      ...state,
      offers,
      isOffersLoaded: true,
    });
  });

  it(`Reducer should set one offer`, () => {
    const setOneOffer = {
      type: ActionType.SET_ONE_OFFER,
      payload: offer
    };

    expect(dataReducer(state, setOneOffer)).toEqual({
      ...state,
      offers: offer,
      isOneOfferLoaded: true
    });
  });

  it(`Reducer should set favorite offers`, () => {
    const setFavoriteOffers = {
      type: ActionType.SET_FAVORITE_OFFERS,
      payload: offers
    };

    expect(dataReducer(state, setFavoriteOffers)).toEqual({
      ...state,
      offers,
      isFavoriteOffersLoaded: true
    });
  });

  it(`Reducer should set comments`, () => {
    const setComments = {
      type: ActionType.SET_COMMENTS,
      payload: comments
    };

    expect(dataReducer(state, setComments)).toEqual({
      ...state,
      comments
    });
  });

  it(`Reducer should set nearby offers`, () => {
    const setNearbyOffers = {
      type: ActionType.SET_NEAR_BY_OFFERS,
      payload: offers
    };

    expect(dataReducer(state, setNearbyOffers)).toEqual({
      ...state,
      nearByOffers: offers
    });
  });

  it(`Reducer should set sorted offers`, () => {
    const setSortedOffers = {
      type: ActionType.SORT_OFFERS,
      payload: offers
    };

    expect(dataReducer(state, setSortedOffers)).toEqual({
      ...state,
      offers
    });
  });

  it(`Reducer should update cards by favorite status`, () => {
    const updateFavoriteCards = {
      type: ActionType.UPDATE_CARD_BY_FAVORITE_STATUS,
      payload: offer
    };

    expect(dataReducer(state, updateFavoriteCards)).toEqual({
      ...state
    });
  });
});
