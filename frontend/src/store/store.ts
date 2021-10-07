import {applyMiddleware, combineReducers, createStore} from "redux";
import {categoryReducer} from "./reducers/category/category-reducer";
import thunk from "redux-thunk";
import {productReducer} from "./reducers/product/product-reducer";
import {cartReducer} from "./reducers/cart/card-reducer";
import {authReducer} from "./reducers/auth/auth-reducer";
import {orderReducer} from "./reducers/order/order-reducer";


let reducers = combineReducers({
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    auth: authReducer,
    order: orderReducer
})

let store = createStore(reducers, applyMiddleware(thunk))
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;