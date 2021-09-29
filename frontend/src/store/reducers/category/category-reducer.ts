import {CategoryAPI} from "../../../api/api";
import {CategoryAction, CategoryActionEnum, categoryState} from "./types";
import {AppDispatch} from "../../store";

let initialState: categoryState = {
    categories: []
}

export const categoryReducer = (state = initialState, action:CategoryAction) => {
    switch (action.type) {
        case CategoryActionEnum.FILL_CATEGORY: {
            return {
                ...state,
                categories: [...action.categories]
            }
        }
        default:
            return state

    }
}

export const fillCategoryAC = (categories: any[]):CategoryAction => ({type: CategoryActionEnum.FILL_CATEGORY, categories})

export const fillCategory = () => {
    return async (dispatch: AppDispatch) => {
        const data = await CategoryAPI.getCategory()
        dispatch(fillCategoryAC(data))
    }
}

