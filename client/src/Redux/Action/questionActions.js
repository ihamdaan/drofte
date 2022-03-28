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
        console.log(data);
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