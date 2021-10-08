import {ProductAPI} from "../../../api/apiStore";
import {ProductAction, ProductActionEnum, productState} from "./types";
import {AppDispatch} from "../../store";
import {productType} from "../../../types/product";

let initialState: productState = {
    products: [],
    product: null as productType | null,
    currentPage: 1,
    isFetching: false,
    sort: '',
    filters: [],
    totalItems: 0,
    perPages: 8
}

export const productReducer = (state = initialState, action: ProductAction) => {
    switch (action.type) {
        case ProductActionEnum.FILL_PRODUCTS: {
            return {...state, products: [...action.products]}
        }
        case ProductActionEnum.GET_PRODUCT_DETAIL: {
            return {...state, product: action.product}
        }
        case ProductActionEnum.SET_CURRENT_PAGE: {
            return {...state, product: action.currentPage}
        }
        case ProductActionEnum.SET_TOTAL_ITEMS: {
            return {...state, totalItems: action.totalItems}
        }
        case ProductActionEnum.IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case ProductActionEnum.SET_SORT: {
            return {...state, sort: action.sort}
        }
        case ProductActionEnum.SET_FILTERS: {
            return {...state, filters: action.filters}
        }

        default:
            return state

    }
}

export const fillProductsAC = (products: any[]): ProductAction => ({type: ProductActionEnum.FILL_PRODUCTS, products})
export const getProductAC = (product: productType): ProductAction => ({
    type: ProductActionEnum.GET_PRODUCT_DETAIL,
    product
})
export const setCurrentPageAC = (currentPage: number): ProductAction => ({
    type: ProductActionEnum.SET_CURRENT_PAGE,
    currentPage
})

export const setTotalItemsAC = (totalItems: number): ProductAction => ({
    type: ProductActionEnum.SET_TOTAL_ITEMS,
    totalItems
})

export const setSortAC = (sort: string): ProductAction => ({
    type: ProductActionEnum.SET_SORT,
    sort
})

export const setFiltersAC = (filters: any[]): ProductAction => ({
    type: ProductActionEnum.SET_FILTERS,
    filters
})


export const isFetchingAC = (isFetching: boolean): ProductAction => ({type: ProductActionEnum.IS_FETCHING, isFetching})


export const fillProductsList = (currentPage: number, sort: string, filters?: any[]) => {
    return async (dispatch: AppDispatch) => {
        dispatch(isFetchingAC(true))

        const data = await ProductAPI.getProducts(currentPage, 8, sort, filters)
        if (data) {
            dispatch(fillProductsAC(data.results))
            dispatch(setCurrentPageAC(currentPage))
            dispatch(setTotalItemsAC(data.count))
            dispatch(setSortAC(sort))
        }
        dispatch(isFetchingAC(false))
    }
}

export const getProductDetail = (productId: string) => {
    return async (dispatch: AppDispatch) => {
        const data = await ProductAPI.getProduct(productId)
        if (data) {
            dispatch(getProductAC(data))
        }
    }
}

export const searchProduct = (q: string) => {
    return async (dispatch: AppDispatch) => {
        const data = await ProductAPI.searchProduct(q)
        if (data) {
            dispatch(fillProductsAC(data.results))
            dispatch(setCurrentPageAC(1))
            dispatch(setTotalItemsAC(data.count))
        }
    }
}
