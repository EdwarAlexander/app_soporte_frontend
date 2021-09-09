import * as equipoTypes  from '../types/equipo';

const initialState = {
    loading: false,
    data: null,
    error: {
        error: false,
        message: ''
    }
}

export default function equipo(state= initialState,action){
    switch (action.type) {
        case equipoTypes.LIST_EQUIPO_START:
            return {
                ...state,
                loading: true
            }
        case equipoTypes.LIST_EQUIPO_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case equipoTypes.LIST_EQUIPO_FAIL:
            return {
                ...state,
                error: {
                    ...state.error,
                    error: action.error.error,
                    message: action.error.message
                }
            }
        case equipoTypes.LIST_EQUIPO_FINALLY:
            return {
                ...state,
                loading: false
            }

        case equipoTypes.ADD_EQUIPO_START:
            return {
                ...state,
                loading: true
            }
        case equipoTypes.ADD_EQUIPO_SUCCESS:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case equipoTypes.ADD_EQUIPO_FAIL:
            return {
                ...state,
                error: {
                    ...state.error,
                    error: action.error.error,
                    message: action.error.message
                }
            }
        case equipoTypes.ADD_EQUIPO_FINALLY:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}