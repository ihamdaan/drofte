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

//load user
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: "LOAD_USER_REQUEST" })
        const { data } = await axios.get("/api/v1/profile", {
            headers: {
                "Content-Type": "application/json",
            }
        })
        dispatch({
            type: "LOAD_USER_SUCCESS",
            payload: {
                user: data.user,
                isAuthenticated: data.success
            }
        })
    } catch (error) {
        dispatch({
            type: "LOAD_USER_FAIL",
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

//forgot Password

export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: "FORGOT_REQUEST" })
        const { data } = await axios.post("/api/v1/password/forgot", { email }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        dispatch({
            type: "FORGOT_SUCCESS",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "FORGOT_FAIL",
            payload: error.response.data.error
        })
    }
}


//Reset Password
export const resetPassword = (token, userdata) => async (dispatch) => {
    try {
        console.log(userdata);
        dispatch({ type: "FORGOT_REQUEST" })
        const { data } = await axios.put(`/api/v1/resetPassword/${token}`, { ...userdata }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        dispatch({
            type: "FORGOT_SUCCESS",
            payload: data.message
        })
    } catch (error) {
        dispatch({
            type: "FORGOT_FAIL",
            payload: error.response.data.error
        })
    }
}