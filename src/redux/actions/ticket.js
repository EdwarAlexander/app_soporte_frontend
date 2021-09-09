import http from '../../services/api';
import * as ticketType from '../types/ticket';

const getTicket = () => async (dispatch) => {
    try {
        dispatch({
            type: ticketType.LIST_TICKET_START
        });
        const response = await http.get('/tickets');
        dispatch({
            type: ticketType.LIST_TICKET_SUCCESS,
            payload: response.data.info
        });
    } catch (error) {
        dispatch({
            type: ticketType.LIST_TICKET_FAIL,
            payload: {
                error: true,
                message: 'Ocurrio un error al obtener los Tickets'
            }
        });
    } finally {
        dispatch({
            type: ticketType.LIST_TICKET_FINALLY
        });
    }
}

export {
    getTicket
}