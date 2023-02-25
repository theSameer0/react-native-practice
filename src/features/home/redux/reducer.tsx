import { SET_LANG } from "./action";
import { SET_CURRENT_MOVIE } from "./action";

let initialState = {
    lang: 'All',
    currentMovie: '',
}

function langReducer (state=initialState, action) {
    switch (action.type) {
        case SET_LANG:
            return {
                ...state,
                lang: action.payload,
            }
            break;
        case SET_CURRENT_MOVIE:
            return {
                ...state,
                currentMovie: action.payload,
            }
        default:
            return state
            break;
    }
}

export default langReducer;