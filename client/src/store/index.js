import { combineReducers } from 'redux'
import authsReducer from './auths/authsReducer';

export default combineReducers({
    auths: authsReducer
}) 