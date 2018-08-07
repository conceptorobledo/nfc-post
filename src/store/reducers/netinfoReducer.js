import { TOGGLE_NET_STATUS } from '../actions/types';

const initialState = {
    isConnected: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_NET_STATUS: {
            return { isConnected: action.type }
        }
        default:
            return;
    }
}