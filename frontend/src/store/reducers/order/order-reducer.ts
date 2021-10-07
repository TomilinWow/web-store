import {AppDispatch} from "../../store";
import {OrderAPI} from "../../../api/apiStore";
import {OrderAction, OrderActionEnum, orderState} from "./types";

let initialState: orderState = {
    orders: [],
}

export const orderReducer = (state = initialState, action: OrderAction) => {
    switch (action.type) {
        case OrderActionEnum.SET_ORDER: {
            return {...state, orders: action.orders}
        }
        case OrderActionEnum.REMOVE_ORDERS: {
            return {...state, orders: []}
        }
        default:
            return state
    }
}

export const setOrdersAC = (orders: any[]):OrderAction => ({
    type: OrderActionEnum.SET_ORDER,
    orders
})

export const removeOrdersAC = ():OrderAction => ({
    type: OrderActionEnum.REMOVE_ORDERS,

})
export const setOrders = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const data = await OrderAPI.setOrders()
            dispatch(setOrdersAC(data))
        } catch (e) {

        }
    }
}

export const removeOrders = () => {
    return async (dispatch: AppDispatch) => {
        try {
            await OrderAPI.removeOrders()
            dispatch(removeOrdersAC())
        } catch (e) {

        }
    }
}

export const postOrders = (id: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            await OrderAPI.postOrders(id)
            dispatch(removeOrdersAC())
        } catch (e) {

        }
    }
}