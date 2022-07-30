import { PointInMap } from './types/offer';

const enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Property = '/offer/:id',
  Error = '*'
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

const FavoriteBtnProp = {
  CARD: {
    className: 'place-card',
    width: '18',
    height: '19'
  },
  PROPERTY: {
    className: 'property',
    width: '31',
    height: '33'
  },
};

const enum TypeOfferCard {
  Main = 'Main',
  Favorite = 'Favorite'
}

const STARS = [
  {score: '5', titleName: 'perfect'},
  {score: '4', titleName: 'good'},
  {score: '3', titleName: 'not bad'},
  {score: '2', titleName: 'badly'},
  {score: '1', titleName: 'terribly'},
];

const citiesCoordinates: {[property: string]: PointInMap} = {
  amsterdam: {lat: 52.3809553943508, lng: 4.9},
  paris: {lat: 48.8534, lng: 2.3488},
  brussels: {lat: 50.8504, lng: 4.34878},
  hamburg: {lat: 53.5753, lng: 10.0153},
  cologne: {lat: 50.8936, lng: 7.0731},
  dusseldorf: {lat: 51.2217, lng: 6.77616},
};

const enum IconMapColour {
  Default = './img/pin.svg',
  Active = './img/pin-active.svg',
}

export {
  AppRoute,
  AuthorizationStatus,
  CITIES,
  FavoriteBtnProp,
  TypeOfferCard,
  STARS,
  citiesCoordinates,
  IconMapColour,
};
