import {AuthAction, AuthActionEnum, authState} from "./types";
import {AppDispatch} from "../../store";
import {AuthAPI} from "../../../api/apiStore";

let initialState: authState = {
    cities: [],
    isModal: false,
    city: 'LOCATION',
    cityId: 0
}

export const authReducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case AuthActionEnum.SET_CITY: {
            return {...state, city: action.city, cityId: action.id}
        }
         case AuthActionEnum.SET_CITY_FROM_COOKIE: {
            return {...state, city: action.city}
        }
        case AuthActionEnum.SET_AUTH: {
            return {...state, isModal: action.isModal}
        }
        case AuthActionEnum.SET_CITIES: {
            let cityId = 0
            for (let i = 0; i < action.cities.length; i++) {
               if (action.cities[i].city === state.city){
                   console.log('cityiesId', action.cities[i].city)
                   cityId = action.cities[i].id
                   console.log('cityId', cityId)
               }
            }
            return {...state, cities: action.cities, cityId: cityId}
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

export const setCityAC = (city: string, id: number): AuthAction => ({
    type: AuthActionEnum.SET_CITY,
    city: city,
    id: id
})

export const setCityFromCookieAC = (city: string): AuthAction => ({
    type: AuthActionEnum.SET_CITY_FROM_COOKIE,
    city: city,

})
export const getCookie = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const data = await AuthAPI.getCookie()
            dispatch(setCityFromCookieAC(data))
        } catch (e) {
            dispatch(setIsModalAC(true))
        }
    }
}
export const setCookie = (id: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            const data = await AuthAPI.setCookie(id)
        } catch (e) {

        }
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
