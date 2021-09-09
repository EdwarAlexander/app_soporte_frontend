import http from '../../services/api';
import * as soporteType from '../types/soporte';

const getSoporte = () => async (dispatch) => {
    try {
        dispatch({
            type: soporteType.LIST_SOPORTE_START
        });
        const response = await http.get('/soportes');
        dispatch({
            type: soporteType.LIST_SOPORTE_SUCCESS,
            payload: response.data.info
        });
    } catch (error) {
        dispatch({
            type: soporteType.LIST_SOPORTE_FAIL,
            payload: {
                error: true,
                message: 'Ocurrio un error al obtener los Soportes'
            }
        });
    } finally {
        dispatch({
            type: soporteType.LIST_SOPORTE_FINALLY
        });
    }
}

const saveSoporte = ({ nombre,telefono }) => async (dispatch) => {
    try {
        dispatch({
            type: soporteType.ADD_SOPORTE_START
        });
        const request = {
            nombre: nombre,
            usuario: 'antanuare',
            telefono: telefono
        };
        const response = await http.post('/soportes', request);
        dispatch({
            type: soporteType.ADD_SOPORTE_SUCCESS,
            payload: response.data.info[0]
        });

    } catch (error) {
        dispatch({
            type: soporteType.ADD_SOPORTE_FAIL,
            payload: {
                error: true,
                message: 'Ocurrio un error al registrar Soportes'
            }
        });
    } finally {
        dispatch({
            type: soporteType.ADD_SOPORTE_FINALLY
        });
    }
}

export {
    getSoporte,
    saveSoporte
}