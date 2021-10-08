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
    SET_TOTAL = "SET_TOTAL",
    REMOVE_ITEM = 'REMOVE_ITEM',
    SET_LENGTH = 'SET_LENGTH',
    INC_LENGTH = 'INC_LENGTH',
    DEC_LENGTH = 'DEC_LENGTH',
    DECREASE_COUNT_ITEM = 'DECREASE_COUNT_ITEM',
    SET_TEST = 'SET_TEST'
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
    productId: number,
    mainPrice: number,
    quantity: number
}
type DecreaseCountItemActionType = {
    type: CartActionEnum.DECREASE_COUNT_ITEM,
    productId: number
}
type IncTotalActionType = {
    type: CartActionEnum.INC_TOTAL,
    total: number,
    productId: number,
    quantity: number
}
type DecTotalActionType = {
    type: CartActionEnum.DEC_TOTAL,
    total: number,
    productId: number,
    quantity: number
}
type IncLengthActionType = {
    type: CartActionEnum.INC_LENGTH,
}
type DecLengthActionType = {
    type: CartActionEnum.DEC_LENGTH,

}
type SetTotalActionType = {
    type: CartActionEnum.SET_TOTAL,
    total: number

}
type SetTestActionType = {
    type: CartActionEnum.SET_TEST,
    id: number

}
export type CartAction = SetCartActionType
    | SetLengthCartActionType
    | ClearCartActionType
    | RemoveCartItemActionType
    | DecreaseCountItemActionType
    | IncTotalActionType
    | DecTotalActionType
    | DecLengthActionType
    | IncLengthActionType
    | SetTotalActionType
    | SetTestActionType