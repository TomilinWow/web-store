import {ProductAPI} from "../../../api/api";
import {ProductAction, ProductActionEnum, productState} from "./types";
import {AppDispatch} from "../../store";
import {productType} from "../../../types/product";

let initialState:productState = {
    products: [],
    product: null as productType | null

}

export const productReducer = (state = initialState, action: ProductAction) => {
    switch (action.type) {
        case ProductActionEnum.FILL_PRODUCTS: {
            return {...state, products: [...action.products]}
        }
        case ProductActionEnum.GET_PRODUCT_DETAIL: {
            return {...state, product: action.product}
        }
        default:
            return state

    }
}

export const fillProductsAC = (products: any[]):ProductAction => ({type: ProductActionEnum.FILL_PRODUCTS, products})
export const getProductAC = (product: productType):ProductAction => ({type: ProductActionEnum.GET_PRODUCT_DETAIL, product})

export const fillProductsList = () => {
    return async (dispatch:AppDispatch) => {
        const data = await ProductAPI.getProducts()
        if (data) {
            dispatch(fillProductsAC(data))
        }
    }
}

export const getProductDetail = (productId:string) => {
    return async (dispatch:AppDispatch) => {
        const data = await ProductAPI.getProduct(productId)
        if (data) {
            dispatch(getProductAC(data))
        }
    }
}
