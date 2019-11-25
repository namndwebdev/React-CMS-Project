import { combineReducers } from "redux";
import tokenReducer from './tokenReducer'

var rootReducer = combineReducers({
    data : tokenReducer
})

export default rootReducer;