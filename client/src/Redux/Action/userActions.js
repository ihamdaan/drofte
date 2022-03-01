import axios from "axios"

//Register user
export const registerUser = (userdata) => async (dispatch) => {
    try {
        dispatch({ type: "LOGIN_REQUEST" })
        const { data } = await axios.post("/api/v1/register", { ...userdata }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: "LOGIN_FAIL",
            payload: error.response.data.error
        })
    }
}

//Login user
export const loginUser = (userdata) => async (dispatch) => {
    try {
        dispatch({ type: "REGISTER_REQUEST" })
        const { data } = await axios.post("/api/v1/login", { ...userdata }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        dispatch({
            type: "REGISTER_SUCCESS",
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: "REGISTER_FAIL",
            payload: error.response.data.error
        })
    }
}