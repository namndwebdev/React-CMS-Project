import { combineReducers } from "redux";
import loginReducer from './loginReducer'
import postReducer from './postReducer'
var rootReducer = combineReducers({
    loginReducer ,//state of redux
    postReducer
})


export default rootReducer;