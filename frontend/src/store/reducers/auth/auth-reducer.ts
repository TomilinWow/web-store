import {AuthAction, AuthActionEnum, authState} from "./types";
import {AppDispatch} from "../../store";
import {AuthAPI} from "../../../api/apiStore";

let initialState: authState = {
    cities: [],
    isModal: false,
    city: 'LOCATION',
}

export const authReducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
         case AuthActionEnum.SET_CITY_FROM_COOKIE: {
            return {...state, city: action.city}
        }
        case AuthActionEnum.SET_AUTH: {
            return {...state, isModal: action.isModal}
        }
        case AuthActionEnum.SET_CITIES: {
            return {...state, cities: action.cities}
        }
        default:
            return state

    }
}

export const setIsModalAC = (isModal: boolean): AuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    isModal
})
export const setCitiesAC = (cities: any[]): AuthAction => ({
    type: AuthActionEnum.SET_CITIES,
    cities
})

export const setCityFromCookieAC = (city: string): AuthAction => ({
    type: AuthActionEnum.SET_CITY_FROM_COOKIE,
    city: city,

})

export const getCookie = () => {
    return async (dispatch: AppDispatch) => {
        const data = document.cookie.match(/location=(.+?)(;|$)/)
        if (data) {
            dispatch(setCityFromCookieAC(data[1]))
        } else {
            dispatch(setIsModalAC(true))
        }
    }
}


export const setCookie = (location: string) => {
    return async (dispatch: AppDispatch) => {
        document.cookie = `location=${location}`
        dispatch(setCityFromCookieAC(location))
    }
}


export const setCities = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const data = await AuthAPI.setCities()
            dispatch(setCitiesAC(data))
        } catch (e) {

        }
    }
}
