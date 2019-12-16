import {
    combineReducers
} from 'redux';
import login_reducer from './Login/login_reducer'
const appReducer = combineReducers({
    login_reducer
})

export default appReducer;