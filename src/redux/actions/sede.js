import http from '../../services/api';
import * as sedeType from '../types/sede';

const getSede = () => async(dispatch) => {
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
                message: 'Ocurrio un error al obtener los platos'
            }
        });
    } finally {
        dispatch({
            type: sedeType.LIST_SEDE_FINALLY
        });
    }
}

export {
    getSede
}