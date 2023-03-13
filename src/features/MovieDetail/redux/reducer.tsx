import { SET_AVAIL_SHOW, SET_BOOKING_DATE , SET_BOOKING_MOVIE_DETAIL, SET_CURRENT_SEAT_DETAIL, SET_IS_DATE_CHANGED, SET_MODAL_VISIBLE, SET_SEAT_STATUS ,SET_TMP_SEAT} from "./action";

let initialState = {
    bookingDate: 0,
    isModalVisible: false,
    bookingMovieDetail : [
        '','','',
    ],
    currentSeatDetail: {},
    availShow: [],
    seat: [
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
    ],
    tmpSeat: [
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
        [false,false,false,false,false,false,false,false,false,false,false,false,],
    ],
}

function movieReducer (state=initialState, action:any) {
    switch (action.type) {
        case SET_CURRENT_SEAT_DETAIL:
            return {
                ...state,
                currentSeatDetail: action.payload,
            }
        case SET_AVAIL_SHOW: 
            return {
                ...state,
                availShow: action.payload,
            }
        case SET_TMP_SEAT:
            return {
                ...state,
                tmpSeat : action.payload,
            }
        case SET_SEAT_STATUS: 
            return {
                ...state,
                seat : action.payload
            }
        case SET_BOOKING_DATE:
            return {
                ...state,
                bookingDate: action.payload,
            }
            break;
        case SET_MODAL_VISIBLE: 
            return {
                ...state,
                isModalVisible : action.payload,
            }
        case SET_BOOKING_MOVIE_DETAIL: 
            return {
                ...state,
                bookingMovieDetail : action.payload,
            }
        default:
            return state
            break;
    }
}

export default movieReducer;
