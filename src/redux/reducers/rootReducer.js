import { combineReducers } from "redux";
import tokenReducer from './tokenReducer'

var rootReducer = combineReducers({
    token : tokenReducer
})


export default rootReducer;