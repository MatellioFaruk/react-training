
import { createStore, combineReducers } from "redux"

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




export const store = createStore(combineReducers({
    user: userReducer,
    counter: reducer
}))
let preValue = store.getState();

store.subscribe(() => {
    console.log("Prev Value", preValue)
    console.log("Updated Value", store.getState())
    preValue = store.getState()
})


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
