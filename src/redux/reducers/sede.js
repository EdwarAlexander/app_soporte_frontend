import * as sedeTypes from '../types/sede';

const initialState = {
    authenticated: false,
    data: null,
    age: 18
}

export default function sede(state = initialState,action){
    switch(action.type){
        case sedeTypes.NAME_SEDE:
            return {
                ...state,
                authenticated: action.payload
            }
    }
    return state;
};