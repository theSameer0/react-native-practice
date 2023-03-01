export const SET_LANG = 'SET_LANG'
export const SET_CURRENT_MOVIE = 'SET_CURRENT_MOVIE'
export const SET_CURRENT_MOVIE_DATA = 'SET_CURRENT_MOVIE_DATA'
export const SET_EXTRA_DETAIL = 'SET_EXTRA_DETAIL'
export const SET_MOVIE_DATA = 'SET_MOVIE_DATA'
export const SET_THEATRE_DATA = 'SET_THEATRE_DATA'
import { MovieData , TheatreData } from "./interface"

export const setLang = (lang : any) => {
    return {
        type: SET_LANG,
        payload: lang,
    }
}

export const setMovieData = (movieData : MovieData[]) => {
    return {
        type: SET_MOVIE_DATA,
        payload: movieData,
    }
}

export const setTheatreData = (theatreData : TheatreData[]) => {
    return {
        type : SET_THEATRE_DATA,
        payload : theatreData,
    }
}

export const setCurrentMovie = (movie: any) => {
    return {
        type : SET_CURRENT_MOVIE,
        payload : movie,
    }
}

export const setCurrentMovieData = (currentMovie : MovieData[])=>{
    return {
        type : SET_CURRENT_MOVIE_DATA,
        payload : currentMovie,
    }
}