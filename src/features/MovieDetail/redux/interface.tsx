
export interface AvailShow {
    id: string,
    movieId: string,
    theatreId: string,
    theatreName: string,
    theatreLocation: string,
    date: string,
    timing: string,
    seats: string,
}
export interface Seat {
    id: string,
    state: number,
    booked: boolean,
}