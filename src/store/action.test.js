import {changeCity, updateCardByFavoriteStatus,
  setSortFilterType, setFavoriteOffers,
  setActiveCard, setOffers,
  setOneOffer, sortOffers,
  setNearByOffers,
  setUserInfo, redirectToRoute,
  setComments, ActionType} from './action';

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

const userInfo = {
  id: 1,
  email: `savandex@gmail.com`,
  name: `savandex`,
  avatarUrl: `https://assets.htmlacademy.ru…tar/5.jpg`,
  isPro: false
};

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

describe(`Action creators should work correctly`, () => {
  it(`Action creator for changing city returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: `Irvine`,
    };

    expect(changeCity(`Irvine`)).toEqual(expectedAction);
  });

  it(`Action creator for changing favorite status returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_CARD_BY_FAVORITE_STATUS,
      payload: offer
    };

    expect(updateCardByFavoriteStatus(offer)).toEqual(expectedAction);
  });

  it(`Action Creator for set sort filter type returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_SORTED_FILTER_TYPE,
      payload: `POPULAR`,
    };

    expect(setSortFilterType(`POPULAR`)).toEqual(expectedAction);
  });

  it(`Action Creator for set favorite offers returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_FAVORITE_OFFERS,
      payload: offers,
    };

    expect(setFavoriteOffers(offers)).toEqual(expectedAction);
  });

  it(`Action Creator for set active card returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_ACTIVE_CARD,
      payload: 2
    };

    expect(setActiveCard(2)).toEqual(expectedAction);
  });

  it(`Action Creator for set card returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_OFFERS,
      payload: offers,
    };

    expect(setOffers(offers)).toEqual(expectedAction);
  });

  it(`Action Creator for set one offer returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_ONE_OFFER,
      payload: offer,
    };

    expect(setOneOffer(offer)).toEqual(expectedAction);
  });

  it(`Action creator for sorting offers returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SORT_OFFERS,
      payload: offers
    };

    expect(sortOffers(offers)).toEqual(expectedAction);
  });

  it(`Action creator for set nearby offers returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_NEAR_BY_OFFERS,
      payload: offers
    };

    expect(setNearByOffers(offers)).toEqual(expectedAction);
  });

  // it(`Action Creator for set authorization status returns correct action`, () => {
  //   const expectedAction = {
  //     type: ActionType.SET_AUTHORIZATION_STATUS,
  //     payload: `NO_AUTH`
  //   };

  //   expect(setAuthorizationStatus(`NO_AUTH`)).toEqual(expectedAction);
  // });

  it(`Action Creator for set user info`, () => {
    const expectedAction = {
      type: ActionType.SET_USER_INFO,
      payload: userInfo
    };

    expect(setUserInfo(userInfo)).toEqual(expectedAction);
  });

  it(`Action Creator for redirect to route returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/login`,
    };

    expect(redirectToRoute(`/login`)).toEqual(expectedAction);
  });

  it(`Action Creator for set comments`, () => {
    const expectedAction = {
      type: ActionType.SET_COMMENTS,
      payload: comments
    };

    expect(setComments(comments)).toEqual(expectedAction);
  });
});


