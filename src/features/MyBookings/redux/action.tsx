import { Ticket } from "./interface"

export const SET_SUCCESS_VISIBLE = 'SET_SUCCESS_VISIBLE'
export const SET_TICKET_DETAILS = 'SET_TICKET_DETAILS'
export const GET_SUCCESS_DATA = 'GET_SUCCESS_DATA'
export const GET_FAILURE_DATA = 'GET_FAILURE_DATA'

export const setSuccessVisible = (visible : boolean) => {
    return {
        type : SET_SUCCESS_VISIBLE,
        payload : visible,
    }
}

export const setTicketDetails = (detail: Ticket) => {
    return {
        type : SET_TICKET_DETAILS,
        payload : detail,
    }
}

export const getSuccessData = (success: any) => {
    return {
        type : GET_SUCCESS_DATA,
        payload : success,
    }
}

export const getFailureData = (failure: any) => {
    return {
        type : GET_FAILURE_DATA ,
        payload : failure,
    }
}
