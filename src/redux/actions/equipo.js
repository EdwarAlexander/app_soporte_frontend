import http from '../../services/api';
import * as equipoType from '../types/equipo';

const getEquipo = () => async (dispatch) => {
    try {
        dispatch({
            type: equipoType.LIST_EQUIPO_START
        });
        const response = await http.get('/equipos');
        dispatch({
            type: equipoType.LIST_EQUIPO_SUCCESS,
            payload: response.data.info
        });
    } catch (error) {
        dispatch({
            type: equipoType.LIST_EQUIPO_FAIL,
            payload: {
                error: true,
                message: 'Ocurrio un error al obtener los equipos'
            }
        });
    } finally {
        dispatch({
            type: equipoType.LIST_EQUIPO_FINALLY
        });
    }
}

const saveEquipo = ({ equipo }) => async (dispatch) => {
    try {
        dispatch({
            type: equipoType.ADD_EQUIPO_START
        });
        const request = {
            nombre: equipo,
            usuario: 'antanuare'
        };
        const response = await http.post('/equipos', request);
        dispatch({
            type: equipoType.ADD_EQUIPO_SUCCESS,
            payload: response.data.info[0]
        });

    } catch (error) {
        dispatch({
            type: equipoType.ADD_EQUIPO_FAIL,
            payload: {
                error: true,
                message: 'Ocurrio un error al registrar el equipo'
            }
        });
    } finally {
        dispatch({
            type: equipoType.ADD_EQUIPO_FINALLY
        });
    }
}

export {
    getEquipo,
    saveEquipo
}