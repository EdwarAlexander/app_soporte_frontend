import http from '../../services/api';
import * as usuarioTypes from '../types/usuario';

export const doLogin = () => async(dispatch) => {    
    try {
        dispatch({type: usuarioTypes.DO_LOGIN_START});
        
        const response = await http.post('/login');
        console.log(response);
        dispatch({
            type: usuarioTypes.DO_LOGIN_SUCCESS,
            payload: 'hola'
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: usuarioTypes.DO_LOGIN_FAIL,
            payload:{
                error:true,
                message:"Ocurrio un error"
            }
        });    
    } finally{
        dispatch({type: usuarioTypes.DO_LOGIN_FINALLY});
    }
}