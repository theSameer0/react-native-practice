export const SET_CURRENT_FEATURE = 'SET_CURRENT_FEATURE'
export const SET_CURRENT_KEYWORD = 'SET_CURRENT_KEYWORD'

export const setCurrentFeature = (feature : any) => {
    return {
        type : SET_CURRENT_FEATURE,
        payload : feature,
    }
}

export const setCurrentKeyword = (keyword: any) => {
    return {
        type : SET_CURRENT_KEYWORD,
        payload : keyword,
    }
}