import { SET_BOOKING_DATE , SET_BOOKING_MOVIE_DETAIL, SET_MODAL_VISIBLE, SET_SEAT_STATUS} from "./action";

let initialState = {
    bookingDate: 0,
    isModalVisible: false,
    bookingMovieDetail : [
        '','',''
    ],
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
    ]
}

function movieReducer (state=initialState, action) {
    switch (action.type) {
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
        case SET_SEAT_STATUS: 
            return {
                ...state,
                seat : Object.assign([...[state.seat]],{
                    [action.row]: Object.assign([...[[state.seat]][action.row]],{
                        [action.col]: action.payload
                    })
                })
            }
        default:
            return state
            break;
    }
}

export default movieReducer;