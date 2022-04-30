import axios from "axios"

export const addAnswer = (questionId, answer) => async (dispatch) => {
    try {
        dispatch({ type: "NEW_ANSWER_REQUEST" })
        const { data } = await axios.post(`/api/v1/answer/add/${questionId}`, answer, {
            headers: { "Content-Type": "application/json" }
        })
        dispatch({
            type: "NEW_ANSWER_SUCCESS",
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: "NEW_ANSWER_FAIL",
            payload: error.response.data.error
        })
    }
}

export const updateAnswer = (answerId, answer) => async (dispatch) => {
    try {
        dispatch({ type: "UPDATE_ANSWER_REQUEST" })
        const { data } = await axios.put(`/api/v1/answer/${answerId}`, answer, {
            headers: { "Content-Type": "application/json" }
        })
        dispatch({
            type: "UPDATE_ANSWER_SUCCESS",
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: "UPDATE_ANSWER_FAIL",
            payload: error.response.data.error
        })
    }
}

export const deleteAnswer = (answerId) => async (dispatch) => {
    try {
        dispatch({ type: "DELETE_ANSWER_REQUEST" })
        const { data } = await axios.delete(`/api/v1/answer/${answerId}`)
        dispatch({
            type: "DELETE_ANSWER_SUCCESS",
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: "DELETE_ANSWER_FAIL",
            payload: error.response.data.error
        })
    }
}

export const LikeAnswer = (answerId) => async (dispatch) => {
    try {
        dispatch({ type: "LIKE_REQUEST" })
        const { data } = await axios.get(`/api/v1/answer/like/${answerId}`)
        dispatch({
            type: "LIKE_SUCCESS",
            payload: { message: data.message, isLiked: data.isLiked }
        })
    } catch (error) {
        dispatch({
            type: "LIKE_FAIL",
            payload: error.response.data.error
        })
    }
}

export const DislikeAnswer = (answerId) => async (dispatch) => {
    try {
        dispatch({ type: "DISLIKE_REQUEST" })
        const { data } = await axios.get(`/api/v1/answer/dislike/${answerId}`)
        dispatch({
            type: "DISLIKE_SUCCESS",
            payload: { message: data.message, isDisliked: data.isDisliked }
        })
    } catch (error) {
        dispatch({
            type: "DISLIKE_FAIL",
            payload: error.response.data.error
        })
    }
}