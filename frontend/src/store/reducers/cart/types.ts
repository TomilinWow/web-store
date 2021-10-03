export type cartState = {
    cart: any[],
    cartLength: number,
    total: number
}

export enum CartActionEnum {
    SET_CART = 'SET_CART',
    INC_TOTAL = 'INC_TOTAL',
    DEC_TOTAL = 'DEC_TOTAL',
    CLEAR_CART = 'CLEAR_CART',
    REMOVE_ITEM = 'REMOVE_ITEM',
    SET_LENGTH = 'SET_LENGTH',
    DECREASE_COUNT_ITEM = 'DECREASE_COUNT_ITEM'
}

type SetCartActionType = {
    type: CartActionEnum.SET_CART,
    cartItems: any[]
}
type SetLengthCartActionType = {
    type: CartActionEnum.SET_LENGTH,
    cartLength: number
}
type ClearCartActionType = {
    type: CartActionEnum.CLEAR_CART,
}
type RemoveCartItemActionType = {
    type: CartActionEnum.REMOVE_ITEM,
    productId: number
}
type DecreaseCountItemActionType = {
    type: CartActionEnum.DECREASE_COUNT_ITEM,
    productId: number
}
type IncTotalActionType = {
    type: CartActionEnum.INC_TOTAL,
    total: number
}
type DecTotalActionType = {
    type: CartActionEnum.DEC_TOTAL,
    total: number
}
export type CartAction = SetCartActionType
    | SetLengthCartActionType
    | ClearCartActionType
    | RemoveCartItemActionType
    | DecreaseCountItemActionType
    | IncTotalActionType
    | DecTotalActionType