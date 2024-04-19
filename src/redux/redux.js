
import { Tuple, configureStore } from "@reduxjs/toolkit"
import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from 'redux-thunk'

import counterReducer from "./slices/counter.slice"
import authReducer from "./slices/auth.slice"


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    },
    middleware: () => new Tuple(logger),
})