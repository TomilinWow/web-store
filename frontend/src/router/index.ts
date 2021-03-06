import React from "react";
import CartContainer from "../components/Cart/CartContainer";
import ProductListContainer from "../components/Products/ProductListContainer";
import ProductContainer from "../components/Product/ProductContainer";
import OrderContainer from "../components/Order/OrderContainer";

type IRoute = {
    path: string,
    component: React.ComponentType,
    exact?: boolean
}

export enum RouteNames {
    HOME = '/',
    CART = '/cart',
    PRODUCT = '/product/:id',
    ORDER = '/order'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.CART, component: CartContainer, exact: true},
    {path: RouteNames.HOME, component: ProductListContainer, exact: true},
    {path: RouteNames.PRODUCT, component: ProductContainer, exact: true},
    {path: RouteNames.ORDER, component: OrderContainer, exact: true}
]

