import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import testReducer from "./testReducer";

let reducers = combineReducers({
    testPage: testReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
