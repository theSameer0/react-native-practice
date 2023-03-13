import { GET_FAILURE_DATA, GET_SUCCESS_DATA, SET_SUCCESS_VISIBLE, SET_TICKET_DETAILS } from "./action";

let initialState = {
    isVisible : true,
    ticketDetail:{},
    successData: {},
    failureData: {},
}

function bookingReducer (state = initialState, action:any) {
    switch (action.type) {
        case SET_SUCCESS_VISIBLE:
            return {
                ...state,
                isVisible : action.payload
            }
            break;
        case SET_TICKET_DETAILS:
            return {
                ...state,
                ticketDetail : action.payload,
            }
        case GET_SUCCESS_DATA:
            return {
                ...state,
                successData: action.payload,
            }
        case GET_FAILURE_DATA:
            return{
                ...state,
                failureData: action.payload,
            }
        default:
            return state
            break;
    }
}

export default bookingReducer;