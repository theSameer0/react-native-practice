export interface Ticket {
    id: string,
    date: string,
    time: string,
    seats: string,
    screen: number,
    seatCount: number,
    movieId: string,
    theatreId: string,
    showId: string,
}

export interface SuccessTicketData {
    success: boolean,
    ticket: Ticket,
}

export interface FailureTicketData {

}