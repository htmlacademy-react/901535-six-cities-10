import { CITIES } from '../const';
import { Offer } from '../types/offer';
import { Action, ActionType } from './action';

const START_CITY_INDEX = 0;

const initialCity = CITIES[START_CITY_INDEX];

export type State = {
  currentCity: string,
  cardList: Offer[],
}

const initialState = {
  currentCity: initialCity,
  cardList: [],
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, currentCity: action.plyload};
    case ActionType.OffersList:
      return {...state, cardList: action.plyload};
    default:
      return state;
  }
};

export {reducer};
