export const SET_BOOKING_DATE = 'SET_BOOKING_DATE'

export const setBookingDate = (bookingDate : any) => {
    return {
        type: SET_BOOKING_DATE,
        payload: bookingDate,
    }
}
