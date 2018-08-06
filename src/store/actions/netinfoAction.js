import { TOGGLE_NET_STATUS } from './types';

import { NetInfo } from 'react-native';

let handleConnectionChange;

export const registerListeners = () => {
    return (dispatch) => {
        handleConnectionChange = (connectionInfo) => {
            dispatch(connectionChanged(connectionInfo));
        }
        NetInfo.addEventListener('connectionChange', handleConnectionChange);
    }
}

export const unregisterListeners = () => {
    return (dispatch) => {
        handleConnectionChange && NetInfo.removeEventListener('connectionChange', handleConnectionChange);
    }
}

const connectionChanged = (connectionInfo) => {
    return (dispatch) => {
        switch (connectionInfo.type) {
            case 'cellular':
                dispatch({
                    type: TOGGLE_NET_STATUS,
                    payload: connectionInfo.type
                });
                break;
        }
    }
}