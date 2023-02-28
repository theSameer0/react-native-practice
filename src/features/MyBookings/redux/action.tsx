export const SET_SUCCESS_VISIBLE = 'SET_SUCCESS_VISIBLE'

export const setSuccessVisible = (visible : boolean) => {
    return {
        type : SET_SUCCESS_VISIBLE,
        payload : visible,
    }
}

