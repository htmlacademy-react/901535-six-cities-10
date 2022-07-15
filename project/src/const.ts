const enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Error = '*'
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

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

export {
  AppRoute,
  AuthorizationStatus,
  FavoriteBtnProp,
  TypeOfferCard,
};
