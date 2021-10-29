import http from '../../services/api';
import * as estadoType from '../types/estado';

const getEstado = () => async (dispatch) => {
    try {
        dispatch({
            type: estadoType.LIST_ESTADO_START
        });
        const response = await http.get('/estados');
        dispatch({
            type: estadoType.LIST_ESTADO_SUCCESS,
            payload: response.data.info
        });
    } catch (error) {
        dispatch({
            type: estadoType.LIST_ESTADO_FAIL,
            payload: {
                error: true,
                message: 'Ocurrio un error al obtener los estados'
            }
        });
    } finally {
        dispatch({
            type: estadoType.LIST_ESTADO_FINALLY
        });
    }
}

const saveEstado = ({estado}) => async (dispatch) => {
    try {
        dispatch({
            type: estadoType.ADD_ESTADO_START
        });
        const request = {
            nombre: estado,
            usuario: 'antanuare'
        };
        const response = await http.post('/estados', request);
        dispatch({
            type: estadoType.ADD_ESTADO_SUCCESS,
            payload: response.data.info[0]
        });

    } catch (error) {
        dispatch({
            type: estadoType.ADD_ESTADO_FAIL,
            payload: {
                error: true,
                message: 'Ocurrio un error al registrar la Nivel'
            }
        });
    } finally {
        dispatch({
            type: estadoType.ADD_ESTADO_FINALLY
        });
    }
}

export {
    getEstado,
    saveEstado
}