import http from '../../services/api';
import * as sedeType from '../types/sede';

const getSede = () => async (dispatch) => {
    try {
        dispatch({
            type: sedeType.LIST_SEDE_START
        });
        const response = await http.get('/sedes');
        dispatch({
            type: sedeType.LIST_SEDE_SUCCESS,
            payload: response.data.info
        });
    } catch (error) {
        dispatch({
            type: sedeType.LIST_SEDE_FAIL,
            payload: {
                error: true,
                message: 'Ocurrio un error al obtener las Sedes'
            }
        });
    } finally {
        dispatch({
            type: sedeType.LIST_SEDE_FINALLY
        });
    }
}

const saveSede = ({sede}) => async (dispatch) => {
    try {
        dispatch({
            type: sedeType.ADD_SEDE_START
        });
        const request = {
            nombre: sede,
            usuario: 'antanuare'
        };
        const response = await http.post('/sedes', request);
        dispatch({
            type: sedeType.ADD_SEDE_SUCCESS,
            payload: response.data.info[0]
        });

    } catch (error) {
        dispatch({
            type: sedeType.ADD_SEDE_FAIL,
            payload: {
                error: true,
                message: 'Ocurrio un error al registrar la Sede'
            }
        });
    } finally {
        dispatch({
            type: sedeType.ADD_SEDE_FINALLY
        });
    }
}

export {
    getSede,
    saveSede
}