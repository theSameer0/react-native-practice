export const SET_BOOKING_DATE = 'SET_BOOKING_DATE'
export const SET_MODAL_VISIBLE = 'SET_MODAL_VISIBLE'
export const SET_BOOKING_MOVIE_DETAIL = 'SET_BOOKING_MOVIE_DETAIL'
export const SET_SEAT_STATUS = 'SET_SEAT_STATUS'

export const setBookingDate = (bookingDate : any) => {
    return {
        type: SET_BOOKING_DATE,
        payload: bookingDate,
    }
}

export const setModalVisible = (modal : any) => {
    return {
        type : SET_MODAL_VISIBLE,
        payload : modal,
    }
}

export const setBookingMovieDetail = ( obj : any) => {
    return {
        type : SET_BOOKING_MOVIE_DETAIL,
        payload : obj
    }
}

export const setSeatStatus = (newSeat:any) => {
    return {
        type : SET_SEAT_STATUS,
        payload : newSeat
    }
}