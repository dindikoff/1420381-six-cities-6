import MockAdapter from 'axios-mock-adapter';
import {createApi} from '../../../services/api';
import {dataReducer} from './data-reducer';
import {ActionType} from '../../action';
import {fetchOffersList, fetchOffersNearBy,
  fetchOffer, fetchComments,
  sendComment, changeFavoriteStatus,
  fetchFavoriteCards} from '../../api-actions';
import {ApiRoute} from '../../../const';

import {adaptOfferToClient, adaptCommentToClient} from '../../../services/adapter';

const FAKE_USER_ID = 2;

const api = createApi(() => {});

const state = {
  offers: [],
  nearByOffers: [],
  isFavoriteOffersLoaded: false,
  isOffersLoaded: false,
  isOneOfferLoaded: false,
  isCommentsLoaded: false,
  isOfferNearByLoaded: false,
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

const offersFromServer = [
  {
    'city': {
      'name': `'Paris'`,
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'preview_image': `'https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg'`,
    'images': [
    ],
    'title': `'The house among olive'`,
    'is_favorite': false,
    'is_premium': true,
    'rating': 3,
    'type': `'room'`,
    'bedrooms': 1,
    'max_adults': 1,
    'price': 169,
    'goods': [
    ],
    'host': {
      'id': 25,
      'name': `'Angelina'`,
      'is_pro': true,
      'avatar_url': `'img/avatar-angelina.jpg'`
    },
    'description': `'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.'`,
    'location': {
      'latitude': 48.83861,
      'longitude': 2.350499,
      'zoom': 16
    },
    'id': 1
  },
  {
    'city': {
      'name': `'Brussels'`,
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'preview_image': `'https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg'`,
    'images': [],
    'title': `'Waterfront with extraordinary view'`,
    'is_favorite': false,
    'is_premium': false,
    'rating': 4.8,
    'type': `'apartment'`,
    'bedrooms': 5,
    'max_adults': 6,
    'price': 310,
    'goods': [],
    'host': {
      'id': 25,
      'name': `'Angelina'`,
      'is_pro': true,
      'avatar_url': `'img/avatar-angelina.jpg'`
    },
    'description': `'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.'`,
    'location': {
      'latitude': 50.844556999999995,
      'longitude': 4.346697,
      'zoom': 16
    },
    'id': 2
  },
  {
    'city': {
      'name': `'Cologne'`,
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'preview_image': `'https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg'`,
    'images': [],
    'title': ``,
    'is_favorite': false,
    'is_premium': true,
    'rating': 4.2,
    'type': ``,
    'bedrooms': 4,
    'max_adults': 6,
    'price': 182,
    'goods': [],
    'host': {
      'id': 25,
      'name': ``,
      'is_pro': true,
      'avatar_url': ``
    },
    'description': ``,
    'location': {
      'latitude': 50.950361,
      'longitude': 6.961974,
      'zoom': 16
    },
    'id': 3
  }
];

const adaptedOffers = offersFromServer.map((plainOffer) => adaptOfferToClient(plainOffer));


const serverComments = [
  {
    'comment': `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
    'date': `2021-02-10T08:04:28.647Z`,
    'id': 1,
    'rating': 3,
    'user': {
      'id': 2,
      'avatar_url': ``,
      'is_pro': false,
      'name': ``,
    }
  },
  {
    'comment': `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
    'date': `2021-02-10T08:04:28.647Z`,
    'id': 2,
    'rating': 4,
    'user': {
      'id': 3,
      'avatar_url': ``,
      'is_pro': true,
      'name': ``,
    }
  },
  {
    'comment': `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
    'date': `2021-02-10T08:04:28.647Z`,
    'id': 3,
    'rating': 5,
    'user': {
      'id': 5,
      'avatar_url': ``,
      'is_pro': false,
      'name': ``,
    }
  }
];

const adaptedComments = serverComments.map((comment) => adaptCommentToClient(comment));

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
      payload: serverComments
    };

    expect(dataReducer(state, setComments)).toEqual({
      ...state,
      comments: serverComments,
      isCommentsLoaded: true,
    });
  });

  it(`Reducer should set nearby offers`, () => {
    const setNearbyOffers = {
      type: ActionType.SET_NEAR_BY_OFFERS,
      payload: offers
    };

    expect(dataReducer(state, setNearbyOffers)).toEqual({
      ...state,
      nearByOffers: offers,
      isOfferNearByLoaded: true
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

describe(`Async operation works correctly for offers`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();
    apiMock.onGet(ApiRoute.OFFERS).reply(200, offersFromServer);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_OFFERS,
          payload: adaptedOffers,
        });
      });
  });

  it(`Should make a correct API call to /nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearByOffersLoader = fetchOffersNearBy(FAKE_USER_ID);

    apiMock.onGet(`${ApiRoute.OFFERS}${FAKE_USER_ID}/nearby`).reply(200, offersFromServer);

    return nearByOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_NEAR_BY_OFFERS,
          payload: adaptedOffers,
        });
      });
  });

  it(`Should make a correct API call to /offers/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const singleOfferLoader = fetchOffer(FAKE_USER_ID);

    apiMock.onGet(`${ApiRoute.OFFERS}${FAKE_USER_ID}`).reply(200, offersFromServer[0]);

    return singleOfferLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ONE_OFFER,
          payload: [adaptedOffers[0]]
        });
      });
  });
});

describe(`Async operation works correctly for comments`, () => {
  it(`Should make a correct API cal to /comments/?id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentLoader = fetchComments(FAKE_USER_ID);

    apiMock.onGet(`${ApiRoute.COMMENTS}${FAKE_USER_ID}`).reply(200, serverComments);

    return commentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_COMMENTS,
          payload: adaptedComments
        });
      });
  });

  it(`Should make a correct API POST call to /comments/?id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeComment = {id: `2`, rating: `4`, comment: `Hello World`};
    const sendCommentLoader = sendComment(fakeComment);

    apiMock
      .onPost(`${ApiRoute.COMMENTS}${FAKE_USER_ID}`)
      .reply(200, serverComments);

    return sendCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_COMMENTS,
          payload: adaptedComments
        });
      });
  });
});

describe(`Async operation works correctly for fAVORITE offers`, () => {
  it(`Should make a correct API call to /favorite/:id/:status by toggle offer as favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    // Status isFavorite : 1 true / 0 false
    const fakeFavoriteData = {id: 1, status: 0};
    const changeFavoriteLoader = changeFavoriteStatus(fakeFavoriteData.id, fakeFavoriteData.status);

    apiMock.onPost(`${ApiRoute.FAVORITE}1/0`).reply(200, offersFromServer[1]);

    return changeFavoriteLoader(dispatch, () => {}, api)
      .then(()=> {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_CARD_BY_FAVORITE_STATUS,
          payload: adaptOfferToClient(offersFromServer[1])
        });
      });
  });

  it(`Should make a correct API call to /favorite/:id/:status by toggle offer as favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const favoriteFetchLoader = fetchFavoriteCards();
    apiMock.onGet(ApiRoute.FAVORITE).reply(200, offersFromServer);

    return favoriteFetchLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_FAVORITE_OFFERS,
          payload: adaptedOffers
        });
      });
  });
});
