export type authState = {
    cities: any[],
    isModal: boolean,
    city: any
}

export enum AuthActionEnum {
    SET_CITY = 'SET_CITY',
    SET_CITIES = 'SET_CITIES',
    SET_COOKIE = 'SET_COOKIE',
    SET_AUTH = 'SET_AUTH'
}

type SetCityActionType = {
    type: AuthActionEnum.SET_CITY,
    city: string
}

type SetCookieCartActionType = {
    type: AuthActionEnum.SET_COOKIE,
    city: number
}

type SetAuthActionType = {
    type: AuthActionEnum.SET_AUTH,
    isModal: boolean
}
type SetCitiesType = {
    type: AuthActionEnum.SET_CITIES,
    cities: any[]
}

export type AuthAction = SetCityActionType
    | SetCookieCartActionType
    | SetAuthActionType
    | SetCitiesType
