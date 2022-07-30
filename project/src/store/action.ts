import { Offer } from '../types/offer';

export enum ActionType {
  ChangeCity = 'city/ChangeCity',
  OffersList = 'city/SetOffersList',
}

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  plyload: city,
} as const);

export const OffersList = (cards: Offer[]) => ({
  type: ActionType.OffersList,
  plyload: cards,
} as const);

export type Action =
| ReturnType<typeof changeCity>
| ReturnType<typeof OffersList>
