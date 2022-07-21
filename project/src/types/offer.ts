type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
};

type City = {
  location: Location,
  name: string,
};

type Host = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
};

export type Offer = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: Host,
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: Location,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
};

type User = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
}

export type Comment = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: User,
}

export type ButtonFavorite = {
  className: string,
  width: string,
  height: string,
};

export type PointInMap = {
  lat: number,
  lng: number,
}
