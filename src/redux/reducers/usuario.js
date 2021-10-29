import * as usuarioTypes from '../types/usuario';

const initialState = {
    authenticated: false,
    loading: false,
    data: null,
    error: {
        error: false,
        message: ''
    }
}

export default function usuario(state = initialState, action) {
    switch (action.type) {
        case usuarioTypes.DO_LOGIN_START:
            return {
                ...state,
                loading: true,
            };
        case usuarioTypes.DO_LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: true,
                data: action.payload,

            };
        case usuarioTypes.DO_LOGIN_FAIL:
            return {
                ...state,
                error: {
                    ...state.error,
                    error: action.payload.error,
                    message: action.payload.message,
                }
            };
        case usuarioTypes.DO_LOGIN_FINALLY:
            return {
                ...state,
                loading:false,
            };
        default:
            return state;
    }
}