import { createStore, applyMiddleware } from 'redux';
import  thunkMiddleware   from 'redux-thunk';
import { createLogger }  from 'redux-logger';
import { combineReducers } from "redux"

import { FetchResponseReducer,Pagination } from "./Reducers/MainReducers"

const Reducers = combineReducers({
    FetchResponseReducer,
    Pagination
});

const middleware = applyMiddleware(thunkMiddleware,createLogger());

export default createStore(Reducers,middleware);