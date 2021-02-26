import { combineReducers } from 'redux';
import authReducer from './authReducer';
import articleReducer from './articleReducer';
import adminReducer from './adminReducer'
export default combineReducers({
    authReducer,articleReducer,adminReducer
    })
