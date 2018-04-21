import { combineReducers } from "redux";
import counterReducer from './counter';
import resultReducer from './result';

const rootReducer = combineReducers({
    counterReducer,
    resultReducer
});

export default rootReducer;
