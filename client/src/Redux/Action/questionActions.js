import axios from "axios"

//Get all questions

export const getAllQues = () => async (dispatch) => {
    try {
        dispatch({ type: "ALL_QUES_REQUEST" })
        const { data } = await axios.get("/api/v1/question/all", {
            headers: {
                "Content-Type": "application/json",
            }
        })
        dispatch({
            type: "ALL_QUES_SUCCESS",
            payload: data.data
        })
    } catch (error) {
        dispatch({
            type: "ALL_QUES_FAIL",
            payload: error.response.data.error
        })
    }
}


//Add a questions
export const addQuestion = (userData) => async (dispatch) => {
    try {
        dispatch({ type: "ADD_QUES_REQUEST" })
        const { data } = await axios.post("/api/v1/question/create", { ...userData }, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        dispatch({
            type: "ADD_QUES_SUCCESS",
            payload: data.data
        })
    } catch (error) {
        dispatch({
            type: "ADD_QUES_FAIL",
            payload: error.response.data.error
        })
    }
}


//Delete a question
export const deleteQuestion = (id) => async (dispatch) => {
    try {
        dispatch({ type: "DELETE_QUES_REQUEST" })
        const { data } = await axios.delete(`/api/v1/question/${id}`)
        dispatch({
            type: "DELETE_QUES_SUCCESS",
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: "DELETE_QUES_FAIL",
            payload: error.response.data.error
        })
    }
} 