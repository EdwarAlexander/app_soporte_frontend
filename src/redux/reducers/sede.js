import * as sedeTypes from '../types/sede';

const initialState = {
    loading: false,
    data: null,
    error: {
        error: false,
        message: ''
    }
}

export default function sede(state = initialState, action) {
    switch (action.type) {
        case sedeTypes.LIST_SEDE_START:
            return {
                ...state,
                loading: true
            }
        case sedeTypes.LIST_SEDE_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case sedeTypes.LIST_SEDE_FAIL:
            return {
                ...state,
                error:{
                    ...state.error,
                    error: action.error.error,
                    message: action.error.message
                }
            }
        case sedeTypes.LIST_SEDE_FINALLY:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
};