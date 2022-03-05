import { createReducer } from "@reduxjs/toolkit"

const initialState = {};
export const userReducer = createReducer(initialState, {

    LOGIN_REQUEST: (state) => {
        state.loading = true
    },
    LOGIN_SUCCESS: (state, action) => {
        state.loading = false
        state.user = action.payload
    },
    LOGIN_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    REGISTER_REQUEST: (state) => {
        state.loading = true
    },
    REGISTER_SUCCESS: (state, action) => {
        state.loading = false
        state.user = action.payload
    },
    REGISTER_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    FORGOT_REQUEST: (state) => {
        state.loading = true
    },
    FORGOT_SUCCESS: (state, action) => {
        state.loading = false
        state.message = action.payload
    },
    FORGOT_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    FORGOT_RESET: (state) => {
        state.loading = false
        state.message = null
        state.error = null
    },
    LOAD_USER_REQUEST: (state) => {
        state.loading = true
        state.isAuthenticated = false
    },
    LOAD_USER_SUCCESS: (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.isAuthenticated = action.payload.isAuthenticated
    },
    LOAD_USER_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    CLEAR_ERRORS: (state) => {
        state.error = null
    }
}
)
