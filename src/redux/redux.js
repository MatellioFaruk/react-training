
import { Tuple, configureStore } from "@reduxjs/toolkit"
import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from 'redux-thunk'

import counterReducer from "./splices/counter.splice"

const initialState = {
    counter: 0
}

const userInitialState = {
    first_name: "Faruk"
}

const reducer = (state = initialState, action) => {
    if (action.type === "INC") {
        return { counter: state.counter + 1 }
    }

    if (action.type === "DEC") {
        return { counter: state.counter - 1 }
    }

    return state
}

const userReducer = (state = userInitialState, action) => {

    if (action.type === "USER_UPDATE") {
        return {
            first_name: "Khan"
        }
    }
    return state
}

const [x, ...rest] = [1, 2, 4]


const middlewares = [thunk, logger]


// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//     },
//     middleware: () => new Tuple(logger),
// })

export const store = createStore(combineReducers({
    user: userReducer,
    counter: reducer
}), applyMiddleware(...middlewares))
//let preValue = store.getState();


// store.subscribe(() => {
//     console.log("Prev Value", preValue)
//     console.log("Updated Value", store.getState())
//     preValue = store.getState()
// })


// store.dispatch({
//     type: "INC"
// })

// store.dispatch({
//     type: "INC"
// })
// console.log(store.getState().user.first_name)
// store.dispatch({
//     type: "USER_UPDATE"
// })


// console.log(store.getState().user.first_name)
