import { FETCH_PATROLS, POST_TO_PATROLS } from '../actions/types';

const initialState = {
    patrols: [],
    response: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PATROLS: {
            const nextState = [...state.patrols, action.payload];
            nextState.sort(function (a, b) {
                return b.timestamp - a.timestamp
            });
            return {
                ...state, patrols: nextState.slice(0, 5)
            };
        }
        case POST_TO_PATROLS: {
            return {...state, response: action.response }
        }
        default:
            return state;
    }
}