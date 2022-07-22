export enum ActionType {
  ChangeCity = 'cityChangeCity',
  GetOffersList = 'city/GetOffersList',
}

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  plyload: city,
} as const)

export const getOffersList = (city: string) => ({
  type: ActionType.GetOffersList,
  plyload: city,
} as const)

export type Action = ReturnType<typeof changeCity> | ReturnType<typeof getOffersList>
