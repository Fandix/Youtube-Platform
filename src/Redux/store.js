import { createStore, applyMiddleware } from 'redux';
import  thunkMiddleware   from 'redux-thunk';
import { createLogger }  from 'redux-logger';
import { combineReducers } from "redux"

import { FetchResponseReducer,Pagination,CollectState,MainCollectDeleteReducers } from "./Reducers/MainReducers"
import { CollectFetchResponseReducer,CollectDeleteReducers } from "./Reducers/CollectReducers"

const Reducers = combineReducers({
    FetchResponseReducer,
    Pagination,
    CollectState,
    MainCollectDeleteReducers,
    //-------------------------------//
    CollectFetchResponseReducer,
    CollectDeleteReducers
});

const middleware = applyMiddleware(thunkMiddleware,createLogger());

export default createStore(Reducers,middleware);