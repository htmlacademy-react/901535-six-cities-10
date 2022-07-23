import { CITIES } from '../const';
import { offers } from '../mocks/offers';
import { Offer } from '../types/offer';
import { getOffersByCityName } from '../utils/utils';
import { Action, ActionType } from './action';

const START_CITY_INDEX = 0;

const initialCity = CITIES[START_CITY_INDEX];

export type State = {
  city: string,
  offers: Offer[],
}

const initalState = {
  city: initialCity,
  offers: getOffersByCityName(offers, initialCity),
};

const reducer = (state: State = initalState, action: Action): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.plyload};
    case ActionType.GetOffersList:
      return {...state, offers: getOffersByCityName(offers, action.plyload)};
    default:
      return state;
  }
};

export {reducer};
