import { createReducer } from "@reduxjs/toolkit"

export const answerReducer = createReducer({}, {
    NEW_ANSWER_REQUEST: (state) => {
        state.loading = true
    },
    NEW_ANSWER_SUCCESS: (state, action) => {
        state.loading = false
        state.isAdded = action.payload
    },
    NEW_ANSWER_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    NEW_ANSWER_RESET: (state) => {
        state.isAdded = false
    },
    DELETE_ANSWER_REQUEST: (state) => {
        state.loading = true
    },
    DELETE_ANSWER_SUCCESS: (state, action) => {
        state.loading = false
        state.isDeleted = action.payload
    },
    DELETE_ANSWER_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    DELETE_ANSWER_RESET: (state) => {
        state.isDeleted = false
    },
    UPDATE_ANSWER_REQUEST: (state) => {
        state.loading = true
    },
    UPDATE_ANSWER_SUCCESS: (state, action) => {
        state.loading = false
        state.isUpdated = action.payload
    },
    UPDATE_ANSWER_RESET: (state) => {
        state.isUpdated = false
    },
    MY_ANS_REQUEST: (state) => {
        state.loading = true
    },
    MY_ANS_SUCCESS: (state, action) => {
        state.loading = false
        state.myAns = action.payload
    },
    MY_ANS_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    LIKE_REQUEST: (state) => {
        state.loading = true
    },
    LIKE_SUCCESS: (state, action) => {
        state.loading = false
        state.message = action.payload.message
        state.isLiked = action.payload.isLiked
    },
    LIKE_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    DISLIKE_REQUEST: (state) => {
        state.loading = true
    },
    DISLIKE_SUCCESS: (state, action) => {
        state.loading = false
        state.message = action.payload.message
        state.isDisliked = action.payload.isDisliked
    },
    DISLIKE_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    RESET_MESSAGE: (state) => {
        state.message = null
    },
    CLEAR_ERRORS: (state) => {
        state.error = null
    }
})
