import { combineReducers } from 'redux';
import sede from './sede';
import nivel from './nivel';
import estado from './estado';
import equipo from './equipo';
import soporte from './soporte';
import tickets from './ticket';
import usuario from './usuario';

export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        sede,
        nivel,
        estado,
        equipo,
        soporte,
        tickets,
        usuario,
        ...injectedReducers
    });

    return rootReducer;
}