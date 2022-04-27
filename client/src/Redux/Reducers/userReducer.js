import { createReducer } from "@reduxjs/toolkit"

const initialState = {};
export const userReducer = createReducer(initialState, {

    LOGIN_REQUEST: (state) => {
        state.loading = true
    },
    LOGIN_SUCCESS: (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.isAuthenticated = action.payload.isAuthenticated
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
        state.user = action.payload.user
        state.isAuthenticated = action.payload.isAuthenticated
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
    LOGOUT_REQUEST: (state) => {
        state.loading = true
    },
    LOGOUT_SUCCESS: (state, action) => {
        state.loading = false
        state.message = action.payload
        state.user = null
        state.isAuthenticated = false
    },
    LOGOUT_RESET: (state) => {
        state.loading = false
        state.message = null
    },
    LOGOUT_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    CLEAR_ERRORS: (state) => {
        state.error = null
    }
})


export const profileReducer = createReducer({}, {
    UPDATE_PROFILE_REQUEST: (state) => {
        state.loading = true
    },
    UPDATE_PROFILE_SUCCESS: (state, action) => {
        state.loading = false
        state.isUpdated = action.payload
    },
    UPDATE_PROFILE_RESET: (state) => {
        state.isUpdated = false
    },
    UPDATE_PROFILE_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    UPDATE_PASSWORD_REQUEST: (state) => {
        state.loading = true
    },
    UPDATE_PASSWORD_SUCCESS: (state, action) => {
        state.loading = false
        state.isChanged = action.payload
    },
    UPDATE_PASSWORD_RESET: (state) => {
        state.isChanged = false
    },
    UPDATE_PASSWORD_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    CLEAR_ERRORS: (state) => {
        state.error = null
    }
})