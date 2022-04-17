import { configureStore } from "@reduxjs/toolkit"
import { questionReducer } from "./Reducers/questionReducer";
import { userReducer, profileReducer } from "./Reducers/userReducer"


const store = configureStore({
    reducer: {
        user: userReducer,
        questions: questionReducer,
        profile: profileReducer
    },
    devTools: true,
})

export default store;