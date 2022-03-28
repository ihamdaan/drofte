import { configureStore } from "@reduxjs/toolkit"
import { questionReducer } from "./Reducers/questionReducer";
import { userReducer } from "./Reducers/userReducer"


const store = configureStore({
    reducer: {
        user: userReducer,
        questions: questionReducer
    },
    devTools: true,
})

export default store;