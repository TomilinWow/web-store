import {applyMiddleware, combineReducers, createStore} from "redux";
import {categoryReducer} from "./category-reducer";
import thunk from "redux-thunk";


let reducers = combineReducers({
    category: categoryReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store;