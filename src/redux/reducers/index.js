import { combineReducers } from 'redux';
import sede from './sede';

export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        sede,
        ...injectedReducers
    });

    return rootReducer;
}