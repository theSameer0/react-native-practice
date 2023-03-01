import { SET_LANG, SET_CURRENT_MOVIE, SET_MOVIE_DATA, SET_THEATRE_DATA , SET_CURRENT_MOVIE_DATA } from "./action";

let initialState = {
    lang: 'All',
    currentMovie: '',
    currentMovieData: [],
    Data: [],
    TheatreData: [],
}

function langReducer (state=initialState, action:any) {
    switch (action.type) {
        case SET_LANG:
            return {
                ...state,
                lang: action.payload,
            }
        case SET_MOVIE_DATA:
            return {
              ...state,
              Data: action.payload,
            }
            break;
        case SET_CURRENT_MOVIE_DATA:
          return {
            ...state,
            currentMovie: action.payload,
          }
        case SET_THEATRE_DATA:
            return {
              ...state,
              TheatreData : action.payload,
            }
        case SET_CURRENT_MOVIE:
            return {
                ...state,
                currentMovie: action.payload,
            }
        default:
            return state
            break;
    }
}

export default langReducer;