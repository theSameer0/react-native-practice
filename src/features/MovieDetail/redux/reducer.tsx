import { SET_BOOKING_DATE } from "./action";

let initialState = {
    bookingDate: 0,
}

function movieReducer (state=initialState, action) {
    switch (action.type) {
        case SET_BOOKING_DATE:
            return {
                ...state,
                bookingDate: action.payload,
            }
            break;
        default:
            return state
            break;
    }
}

export default movieReducer;