import * as ticketTypes from '../types/ticket';

const initialState = {
    loading: false,
    data: [],
    error: {
        error: false,
        message: ''
    }
}

export default function ticket(state = initialState, action) {
    switch (action.type) {
        case ticketTypes.LIST_TICKET_START:
            return {
                ...state,
                loading: true
            }
        case ticketTypes.LIST_TICKET_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case ticketTypes.LIST_TICKET_FAIL:
            return {
                ...state,
                error: {
                    ...state.error,
                    error: action.error.error,
                    message: action.error.message
                }
            }
        case ticketTypes.LIST_TICKET_FINALLY:
            return {
                ...state,
                loading: false
            }

        case ticketTypes.ADD_TICKET_START:
            return {
                ...state,
                loading: true
            }
        case ticketTypes.ADD_TICKET_SUCCESS:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case ticketTypes.ADD_TICKET_FAIL:
            return {
                ...state,
                error: {
                    ...state.error,
                    error: action.error.error,
                    message: action.error.message
                }
            }
        case ticketTypes.ADD_TICKET_FINALLY:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}