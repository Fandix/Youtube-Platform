import { createStore, applyMiddleware } from 'redux';
import  thunkMiddleware   from 'redux-thunk';
import { createLogger }  from 'redux-logger';
import { combineReducers } from "redux"

import { FetchResponseReducer } from "./Reducers/MainReducers"

const Reducers = combineReducers({
    FetchResponseReducer
});

const middleware = applyMiddleware(thunkMiddleware,createLogger());

export default createStore(Reducers,middleware);