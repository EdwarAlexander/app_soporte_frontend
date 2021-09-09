import * as nivelTypes from '../types/nivel';

const initialState = {
    loading: false,
    data: null,
    error: {
        error: false,
        message: ''
    }
}

export default function nivel(state= initialState, action){
    switch (action.type) {
        case nivelTypes.LIST_NIVEL_START:
            return {
                ...state,
                loading: true
            }
        case nivelTypes.LIST_NIVEL_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case nivelTypes.LIST_NIVEL_FAIL:
            return {
                ...state,
                error: {
                    ...state.error,
                    error: action.error.error,
                    message: action.error.message
                }
            }
        case nivelTypes.LIST_NIVEL_FINALLY:
            return {
                ...state,
                loading: false
            }

        case nivelTypes.ADD_NIVEL_START:
            return {
                ...state,
                loading: true
            }
        case nivelTypes.ADD_NIVEL_SUCCESS:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case nivelTypes.ADD_NIVEL_FAIL:
            return {
                ...state,
                error: {
                    ...state.error,
                    error: action.error.error,
                    message: action.error.message
                }
            }
        case nivelTypes.ADD_NIVEL_FINALLY:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}