import {ProfileAPI} from "../api/api";

const FILL_CATEGORY = 'FILL_CATEGORY'

let initialState = {
    category: []
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILL_CATEGORY: {
            return {
                ...state,
                category: [...action.categories]
            }
        }
        default:
            return state

    }
}

export const fillCategoryAC = (categories) => ({type: FILL_CATEGORY, categories})


export const fillCategory = () => {
    return (dispatch) => {
        debugger
        let data = ProfileAPI.getProfile()
        console.log(data.Array)
        if (!data){
           dispatch(fillCategoryAC(data))
        }
    }
}

