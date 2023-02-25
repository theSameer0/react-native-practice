import { SET_CURRENT_FEATURE, SET_CURRENT_KEYWORD, SET_SEARCH_RELOAD } from "./action";

let initialState = {
    feature: 'Movies',
    keyword: '',
    searchRefresh : false,
}

function searchReducer (state=initialState, action:any) {
    switch (action.type) {
        case SET_CURRENT_FEATURE:
            return {
                ...state,
                feature: action.payload,
            }
            break;
        case SET_CURRENT_KEYWORD:
            return {
                ...state,
                keyword : action.payload,
            }
        case SET_SEARCH_RELOAD:
            return {
                ...state,
                searchRefresh : action.payload,
            }
        default:
            return state
            break;
    }
}

export default searchReducer;