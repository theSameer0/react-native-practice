import { SET_LANG } from "./action";

let initialState = {
    lang: 'All',
}

function langReducer (state=initialState, action) {
    switch (action.type) {
        case SET_LANG:
            return {
                ...state,
                lang: action.payload,
            }
            break;
    
        default:
            return state
            break;
    }
}

export default langReducer;