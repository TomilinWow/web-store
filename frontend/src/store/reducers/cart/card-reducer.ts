import {AppDispatch} from "../../store";
import {CartAction, CartActionEnum, cartState} from "./types";
import {CartAPI} from "../../../api/apiCart";

let initialState: cartState = {
    cart: [],
    cartLength: 0,
    total: 0
}

export const cartReducer = (state = initialState, action: CartAction) => {
    switch (action.type) {
        case CartActionEnum.SET_CART: {
            console.log(`action ${[...action.cartItems]}`)
            return {...state, cart: [...action.cartItems]}
        }
        case CartActionEnum.SET_LENGTH: {
            return {...state, cartLength: action.cartLength}
        }
        case CartActionEnum.REMOVE_ITEM: {
            return {...state, cart: [...state.cart].filter(item => action.productId != item.id)}
        }
        case CartActionEnum.CLEAR_CART: {
            return {...state, cart: [], total: 0, cartLength: 0}
        }
        case CartActionEnum.INC_TOTAL: {
            return {...state, total: state.total + action.total}
        }
        case CartActionEnum.DEC_TOTAL: {
            return {...state, total: state.total - action.total}
        }
        default:
            return state

    }
}

export const setLengthAC = (cartLength: number): CartAction => ({
    type: CartActionEnum.SET_LENGTH,
    cartLength
})

export const increaseTotalAC = (total: number): CartAction => ({
    type: CartActionEnum.INC_TOTAL,
    total
})
export const decreaseTotalAC = (total: number): CartAction => ({
    type: CartActionEnum.DEC_TOTAL,
    total
})
export const setCartAC = (cartItems: any[]): CartAction => ({
    type: CartActionEnum.SET_CART,
    cartItems
})
export const removeCartItemAC = (productId: number): CartAction => ({
    type: CartActionEnum.REMOVE_ITEM,
    productId
})
export const removeCartAC = (): CartAction => ({
    type: CartActionEnum.CLEAR_CART,
})
export const decreaseCountItemAC = (productId: number): CartAction => ({
    type: CartActionEnum.DECREASE_COUNT_ITEM,
    productId
})

export const setCart = () => {
    return async (dispatch: AppDispatch) => {
        const data = await CartAPI.getCart()
        const values = Object.values(data)
        dispatch(setCartAC(values))
    }
}

export const removeItem = (productId: number) => {
    return async (dispatch: AppDispatch) => {
        const data = await CartAPI.removeItem(productId)
        dispatch(removeCartItemAC(productId))
    }
}
export const removeCart = () => {
    return async (dispatch: AppDispatch) => {
        const data = await CartAPI.clearCart()
        dispatch(removeCartAC())
    }
}

export const decreaseCountItem = (productId: number) => {
    return async (dispatch: AppDispatch) => {
        await CartAPI.decreaseCountItem(productId)
        const length = await CartAPI.getLengthCart()
        dispatch(setLengthAC(length))
    }
}
export const setLengthCart = () => {
    return async (dispatch: AppDispatch) => {

        const data = await CartAPI.getLengthCart()
        dispatch(setLengthAC(data))
        debugger
    }
}

export const addItemToCart = (itemId: number) => {
    return async (dispatch: AppDispatch) => {

        const data = await CartAPI.addItem(itemId)
        console.log(data)
        const length = await CartAPI.getLengthCart()
        dispatch(setLengthAC(length))
    }
}


