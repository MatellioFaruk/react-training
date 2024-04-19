import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginWithRedux: (state, payload) => {
            state.isAuthenticated = true
        },
        logoutWithRedux: (state, payload) => {
            state.isAuthenticated = false
        }
    }
})

export const { loginWithRedux, logoutWithRedux } = authSlice.actions

export default authSlice.reducer