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
            return {...state, cart: [...action.cartItems]}
        }
        case CartActionEnum.SET_LENGTH: {
            return {...state, cartLength: action.cartLength}
        }
        case CartActionEnum.REMOVE_ITEM: {
            return {
                ...state,
                cartLength: state.cartLength - action.quantity,
                total: state.total - action.mainPrice,
                cart: [...state.cart].filter(item => action.productId !== item.id),
            }
        }
        case CartActionEnum.CLEAR_CART: {
            return {...state, cart: [], total: 0, cartLength: 0}
        }
        case CartActionEnum.INC_TOTAL: {
            return {
                ...state,
                total: state.total + action.total,
                cart: state.cart.map(item => {
                    if (item.id === action.productId) {
                        return {
                            ...item,
                            quantity: action.quantity,
                        }
                    }
                    return item;
                })
            }
        }
        case CartActionEnum.DEC_TOTAL: {
            return {
                ...state,
                total: state.total - action.total,
                cart: state.cart.map(item => {
                    if (item.id === action.productId) {
                        return {
                            ...item,
                            quantity: action.quantity,
                        }
                    }
                    return item;
                })

            }
        }
        case CartActionEnum.INC_LENGTH: {
            return {...state, cartLength: state.cartLength + 1}
        }
        case CartActionEnum.DEC_LENGTH: {
            return {...state, cartLength: state.cartLength - 1}
        }
        case CartActionEnum.SET_TOTAL: {
            return {...state, total: action.total}
        }
        default:
            return state

    }
}

export const setLengthAC = (cartLength: number): CartAction => ({
    type: CartActionEnum.SET_LENGTH,
    cartLength
})

export const increaseTotalAC = (total: number, productId: number, quantity: number): CartAction => ({
    type: CartActionEnum.INC_TOTAL,
    total,
    productId,
    quantity
})
export const decreaseTotalAC = (total: number, productId: number, quantity: number): CartAction => ({
    type: CartActionEnum.DEC_TOTAL,
    total,
    productId,
    quantity
})
export const setCartAC = (cartItems: any[]): CartAction => ({
    type: CartActionEnum.SET_CART,
    cartItems
})
export const removeCartItemAC = (productId: number, mainPrice: number, quantity: number): CartAction => ({
    type: CartActionEnum.REMOVE_ITEM,
    productId,
    mainPrice,
    quantity
})
export const removeCartAC = (): CartAction => ({
    type: CartActionEnum.CLEAR_CART,
})

export const decreaseCountItemAC = (productId: number): CartAction => ({
    type: CartActionEnum.DECREASE_COUNT_ITEM,
    productId
})
export const incLengthItemAC = (): CartAction => ({
    type: CartActionEnum.INC_LENGTH,
})
export const decLengthItemAC = (): CartAction => ({
    type: CartActionEnum.DEC_LENGTH,
})

export const setTotalAC = (total: number): CartAction => ({
    type: CartActionEnum.SET_TOTAL,
    total
})

export const setTotal = () => {
    return async (dispatch: AppDispatch) => {
        const data = await CartAPI.totalCart()
        dispatch(setTotalAC(data))
    }
}

export const setCart = () => {
    return async (dispatch: AppDispatch) => {
        const data = await CartAPI.getCart()
        const values = Object.values(data)
        dispatch(setCartAC(values))
    }
}

export const removeItem = (productId: number, mainPrice: number, quantity: number) => {
    return async (dispatch: AppDispatch) => {
        await CartAPI.removeItem(productId)
        dispatch(removeCartItemAC(productId, mainPrice, quantity))
    }
}
export const removeCart = () => {
    return async (dispatch: AppDispatch) => {
        await CartAPI.clearCart()
        dispatch(removeCartAC())
    }
}

export const decreaseCountItem = (productId: number) => {
    return async (dispatch: AppDispatch) => {
        await CartAPI.decreaseCountItem(productId)
        dispatch(decLengthItemAC())
    }
}
export const setLengthCart = () => {
    return async (dispatch: AppDispatch) => {
        const data = await CartAPI.getLengthCart()
        dispatch(setLengthAC(data))
    }
}

export const addItemToCart = (itemId: number) => {
    return async (dispatch: AppDispatch) => {
        await CartAPI.addItem(itemId)
        dispatch(incLengthItemAC())
    }
}


