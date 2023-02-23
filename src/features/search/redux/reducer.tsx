import { SET_CURRENT_FEATURE, SET_CURRENT_KEYWORD } from "./action";

let initialState = {
    feature: 'Movies',
}

function featureReducer (state=initialState, action:any) {
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
        default:
            return state
            break;
    }
}

export default featureReducer;