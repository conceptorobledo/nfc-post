import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import netinfoReducer from './netinfoReducer';

export default combineReducers({
    patrols:dataReducer
})