import {productType} from "../../../types/product";

export type productState = {
    products: productType[]
    product: any,
    currentPage: number,
    isFetching: boolean,
    totalItems: number,
    perPages: number,
    sort: string,
    filters: any
}

export enum ProductActionEnum {
    FILL_PRODUCTS = 'FILL_PRODUCTS',
    GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    IS_FETCHING = 'IS_FETCHING',
    SET_TOTAL_ITEMS = 'SET_TOTAL_ITEMS',
    SET_SORT = 'SET_SORT',
    SET_FILTERS = 'SET_FILTERS',


}

type FillProductActionType = {
    type: ProductActionEnum.FILL_PRODUCTS,
    products: productType[]
}
type GetProductDetailType = {
    type: ProductActionEnum.GET_PRODUCT_DETAIL,
    product: productType
}
type SetCurrentPageType = {
    type: ProductActionEnum.SET_CURRENT_PAGE,
    currentPage: number
}
type IsFetchingType = {
    type: ProductActionEnum.IS_FETCHING,
    isFetching: boolean
}

type SetTotalItemsType = {
    type: ProductActionEnum.SET_TOTAL_ITEMS,
    totalItems: number
}

type SetSortType = {
    type: ProductActionEnum.SET_SORT,
    sort: string
}
type SetFiltersType = {
    type: ProductActionEnum.SET_FILTERS,
    filters: any[]
}


export type ProductAction = FillProductActionType
    | GetProductDetailType
    | SetCurrentPageType
    | IsFetchingType
    | SetTotalItemsType
    | SetSortType
    | SetFiltersType
