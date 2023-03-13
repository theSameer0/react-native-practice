import { AvailShow } from "./interface"

export const SET_BOOKING_DATE = 'SET_BOOKING_DATE'
export const SET_MODAL_VISIBLE = 'SET_MODAL_VISIBLE'
export const SET_BOOKING_MOVIE_DETAIL = 'SET_BOOKING_MOVIE_DETAIL'
export const SET_SEAT_STATUS = 'SET_SEAT_STATUS'
export const SET_TMP_SEAT = 'SET_TMP_SEAT'
export const SET_AVAIL_SHOW = 'SET_AVAIL_SHOW'
export const SET_CURRENT_SEAT_DETAIL = 'SET_CURRENT_SEAT_DETAIL'

export const setCurrentSeatDetail = (seatDetail : any) => {
    return {
        type : SET_CURRENT_SEAT_DETAIL,
        payload : seatDetail,
    }
}
export const setAvailShow = (availShow : AvailShow[]) => {
    return {
        type: SET_AVAIL_SHOW,
        payload: availShow,
    }
}

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

export const setTmpSeat = (tmpSeat:any) => {
    return {
        type : SET_TMP_SEAT,
        payload : tmpSeat,
    }
}