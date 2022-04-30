import axios from "axios"


//Get all questions
export const getAllQues = (keyword = "", page = 1) => async (dispatch) => {
    try {
        dispatch({ type: "ALL_QUES_REQUEST" })
        let link = `/api/v1/question/all?page=${page}`

        if (keyword !== "") {

            var newURL = encodeURIComponent(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
            link = `/api/v1/question/all?keyword=+${newURL}`
        }
        const { data } = await axios.get(link, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        dispatch({
            type: "ALL_QUES_SUCCESS",
            payload: {
                data: data.data,
                documents: data.numberOfDocuments,
                resultsPerPage: data.ResultsPerPage,
                filteredQuesCount: data.filteredQuesCount,
            }
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
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: "ADD_QUES_FAIL",
            payload: error.response.data.message

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


//Update a question
export const updateQuestion = (id, updatedData) => async (dispatch) => {
    try {
        dispatch({ type: "UPDATE_QUES_REQUEST" })
        const { data } = await axios.put(`/api/v1/question/${id}`, { ...updatedData }, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        dispatch({
            type: "UPDATE_QUES_SUCCESS",
            payload: data.success
        })
    } catch (error) {
        dispatch({
            type: "UPDATE_QUES_FAIL",
            payload: error.response.data.error
        })
    }
}


//Get logged in user's questions
export const getMyQuestions = (keyword, page = 1) => async (dispatch) => {
    try {
        dispatch({ type: "MY_QUES_REQUEST" })
        let link = `/api/v1/question/my?page=${page}`
        if (keyword) {
            link = `/api/v1/question/my?keyword=${keyword}&page=${page}`
        }
        const { data } = await axios.get(link);
        dispatch({
            type: "MY_QUES_SUCCESS",
            payload: data.questions
        })
    } catch (error) {
        dispatch({
            type: "MY_QUES_FAIL",
            payload: error.response.data.error
        })
    }
}

//Get logged in user's answered questions
export const getMyAnsweredQuestions = (keyword, page = 1) => async (dispatch) => {
    try {
        dispatch({ type: "MY_ANS_REQUEST" })
        let link = `/api/v1/question/my/answers?page=${page}`
        if (keyword) {
            link = `/api/v1/question/my/answers?keyword=${keyword}&page=${page}`
        }
        const { data } = await axios.get(link);
        dispatch({
            type: "MY_ANS_SUCCESS",
            payload: data.answers
        })
    } catch (error) {
        dispatch({
            type: "MY_ANS_FAIL",
            payload: error.response.data.error
        })
    }
}

//Get single question details
export const getQuestionDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: "SINGLE_QUES_REQUEST" })

        const { data } = await axios.get(`/api/v1/question/${id}`);
        dispatch({
            type: "SINGLE_QUES_SUCCESS",
            payload: data.question
        })
    } catch (error) {
        dispatch({
            type: "SINGLE_QUES_FAIL",
            payload: error.response.data.error
        })
    }
}

//Get all Tags
export const getAllTags = () => async (dispatch) => {
    try {
        dispatch({ type: "TAGS_REQUEST" })

        const { data } = await axios.get(`/api/v1/question/tags`);
        dispatch({
            type: "TAGS_SUCCESS",
            payload: data.tags
        })
    } catch (error) {
        dispatch({
            type: "TAGS_FAIL",
            payload: error.response.data.error
        })
    }
} 