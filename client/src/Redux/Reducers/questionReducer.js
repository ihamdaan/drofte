import { createReducer } from "@reduxjs/toolkit"

const initialState = {};

export const questionReducer = createReducer(initialState, {
    ALL_QUES_REQUEST: (state) => {
        state.loading = true
    },
    ALL_QUES_SUCCESS: (state, action) => {
        state.loading = false
        state.ques = action.payload
    },
    ALL_QUES_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    ADD_QUES_REQUEST: (state) => {
        state.loading = true
    },
    ADD_QUES_SUCCESS: (state, action) => {
        state.loading = false
        state.newques = action.payload
    },
    ADD_QUES_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    DELETE_QUES_REQUEST: (state) => {
        state.loading = true
    },
    DELETE_QUES_SUCCESS: (state, action) => {
        state.loading = false
        state.message = action.payload
    },
    DELETE_QUES_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    }
})