export type authState = {
    cities: any[],
    isModal: boolean,
    city: any,
    cityId: number
}

export enum AuthActionEnum {
    SET_CITY = 'SET_CITY',
    SET_CITIES = 'SET_CITIES',
    SET_COOKIE = 'SET_COOKIE',
    SET_AUTH = 'SET_AUTH',
    SET_CITY_FROM_COOKIE = 'SET_CITY_FROM_COOKIE'
}

type SetCityActionType = {
    type: AuthActionEnum.SET_CITY,
    city: string,
    id: number
}

type SetCookieCartActionType = {
    type: AuthActionEnum.SET_COOKIE,
    city: number,
}

type SetAuthActionType = {
    type: AuthActionEnum.SET_AUTH,
    isModal: boolean
}
type SetCitiesType = {
    type: AuthActionEnum.SET_CITIES,
    cities: any[]
}
type SetCityFromCookieType = {
    type: AuthActionEnum.SET_CITY_FROM_COOKIE,
    city: string
}

export type AuthAction = SetCityActionType
    | SetCookieCartActionType
    | SetAuthActionType
    | SetCitiesType
    | SetCityFromCookieType