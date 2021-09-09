import * as soporteTypes from '../types/soporte';

const initialState = {
    loading: false,
    data: null,
    error: {
        error: false,
        message: ''
    }
}

export default function soporte(state = initialState, action) {
    switch (action.type) {
        case soporteTypes.LIST_SOPORTE_START:
            return {
                ...state,
                loading: true
            }
        case soporteTypes.LIST_SOPORTE_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case soporteTypes.LIST_SOPORTE_FAIL:
            return {
                ...state,
                error: {
                    ...state.error,
                    error: action.error.error,
                    message: action.error.message
                }
            }
        case soporteTypes.LIST_SOPORTE_FINALLY:
            return {
                ...state,
                loading: false
            }

        case soporteTypes.ADD_SOPORTE_START:
            return {
                ...state,
                loading: true
            }
        case soporteTypes.ADD_SOPORTE_SUCCESS:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case soporteTypes.ADD_SOPORTE_FAIL:
            return {
                ...state,
                error: {
                    ...state.error,
                    error: action.error.error,
                    message: action.error.message
                }
            }
        case soporteTypes.ADD_SOPORTE_FINALLY:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}