import {productType} from "../../../types/product";

export type productState = {
    products: productType[]
    product: any
}

export enum ProductActionEnum {
    FILL_PRODUCTS = 'FILL_PRODUCTS',
    GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL'
}

type FillProductActionType = {
    type: ProductActionEnum.FILL_PRODUCTS,
    products: productType[]
}
type getProductDetailType = {
    type: ProductActionEnum.GET_PRODUCT_DETAIL,
    product: productType
}

export type ProductAction = FillProductActionType | getProductDetailType