import { combineReducers } from 'redux';
import sede from './sede';
import nivel from './nivel';
import estado from './estado';
import equipo from './equipo';
import soporte from './soporte';
import tickets from './ticket';

export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        sede,
        nivel,
        estado,
        equipo,
        soporte,
        tickets,
        ...injectedReducers
    });

    return rootReducer;
}