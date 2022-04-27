import { configureStore } from "@reduxjs/toolkit"
import { answerReducer } from "./Reducers/answerReducer";
import { questionReducer } from "./Reducers/questionReducer";
import { userReducer, profileReducer } from "./Reducers/userReducer"


const store = configureStore({
    reducer: {
        user: userReducer,
        profile: profileReducer,
        questions: questionReducer,
        answers: answerReducer
    },
    devTools: true,
})

export default store;