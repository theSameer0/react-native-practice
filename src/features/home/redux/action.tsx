export const SET_LANG = 'SET_LANG'
export const SET_CURRENT_MOVIE = 'SET_CURRENT_MOVIE'
export const SET_CURRENT_MOVIE_DATA = 'SET_CURRENT_MOVIE_DATA'

export const setLang = (lang : any) => {
    return {
        type: SET_LANG,
        payload: lang,
    }
}

export const setCurrentMovie = (movie: any) => {
    return {
        type : SET_CURRENT_MOVIE,
        payload : movie,
    }
}

export const setCurrentMovieData = (movie: any) => {
    return {
        type: SET_CURRENT_MOVIE_DATA,
        payload : movie
    }
}