import * as estadoTypes from '../types/estado';

const initialState = {
    loading: false,
    data: null,
    error: {
        error: false,
        message: ''
    }
}

export default function estado(state = initialState, action) {
    switch (action.type) {
        case estadoTypes.LIST_ESTADO_START:
            return {
                ...state,
                loading: true
            }
        case estadoTypes.LIST_ESTADO_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case estadoTypes.LIST_ESTADO_FAIL:
            return {
                ...state,
                error: {
                    ...state.error,
                    error: action.error.error,
                    message: action.error.message
                }
            }
        case estadoTypes.LIST_ESTADO_FINALLY:
            return {
                ...state,
                loading: false
            }

        case estadoTypes.ADD_ESTADO_START:
            return {
                ...state,
                loading: true
            }
        case estadoTypes.ADD_ESTADO_SUCCESS:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case estadoTypes.ADD_ESTADO_FAIL:
            return {
                ...state,
                error: {
                    ...state.error,
                    error: action.error.error,
                    message: action.error.message
                }
            }
        case estadoTypes.ADD_ESTADO_FINALLY:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}