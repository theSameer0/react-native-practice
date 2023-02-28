import { SET_SUCCESS_VISIBLE } from "./action";

let initialState = {
    isVisible : true,
}

function bookingReducer (state = initialState, action) {
    switch (action.type) {
        case SET_SUCCESS_VISIBLE:
            return {
                ...state,
                isVisible : action.payload
            }
            break;
    
        default:
            return state
            break;
    }
}

export default bookingReducer;