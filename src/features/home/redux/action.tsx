export const SET_LANG = 'SET_LANG'

export const setLang = (lang : any) => {
    return {
        type: SET_LANG,
        payload: lang,
    }
}