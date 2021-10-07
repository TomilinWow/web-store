import {orderType} from "../../../types/order";

export type orderState = {
    orders: orderType[],
}

export enum OrderActionEnum {
    SET_ORDER = 'SET_ORDER',
    REMOVE_ORDERS = 'REMOVE_ORDERS'
}

type SetOrderActionType = {
    type: OrderActionEnum.SET_ORDER,
    orders: any[]
}
type RemoveOrdersActionType = {
    type: OrderActionEnum.REMOVE_ORDERS,
}

export type OrderAction = SetOrderActionType | RemoveOrdersActionType
