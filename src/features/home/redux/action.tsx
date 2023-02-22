export const SET_LANG = 'SET_LANG'

export const setLang = (lang : any) => (dispatch:any) => {
    dispatch({
        type: SET_LANG,
        payload: lang,
    })
}