import http from '../../services/api';
import * as nivelType from '../types/nivel';

const getNivel = () => async (dispatch) => {
    try {
        dispatch({
            type: nivelType.LIST_NIVEL_START
        });
        const response = await http.get('/niveles');
        dispatch({
            type: nivelType.LIST_NIVEL_SUCCESS,
            payload: response.data.info
        });
    } catch (error) {
        dispatch({
            type: nivelType.LIST_NIVEL_FAIL,
            payload: {
                error: true,
                message: 'Ocurrio un error al obtener las Nivel'
            }
        });
    } finally {
        dispatch({
            type: nivelType.LIST_NIVEL_FINALLY
        });
    }
}

const saveNivel = ({nivel}) => async (dispatch) => {
    try {
        dispatch({
            type: nivelType.ADD_NIVEL_START
        });
        const request = {
            nombre: nivel,
            usuario: 'antanuare'
        };
        const response = await http.post('/niveles', request);
        dispatch({
            type: nivelType.ADD_NIVEL_SUCCESS,
            payload: response.data.info[0]
        });

    } catch (error) {
        dispatch({
            type: nivelType.ADD_NIVEL_FAIL,
            payload: {
                error: true,
                message: 'Ocurrio un error al registrar la Nivel'
            }
        });
    } finally {
        dispatch({
            type: nivelType.ADD_NIVEL_FINALLY
        });
    }
}

export {
    getNivel,
    saveNivel
}