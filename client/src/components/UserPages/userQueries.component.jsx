import React, { useEffect, useState } from 'react';
import "../../index.css";
import HomeFeedPost from '../HomeFeed/homeFeedPost.component';
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader"
import 'react-quill/dist/quill.snow.css'
import { useAlert } from "react-alert";
import { getMyQuestions } from '../../Redux/Action/questionActions';
import { BiSearch } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';

const UserQueries = () => {

    const dispatch = useDispatch()
    const alert = useAlert()
    const { myQues, loading, error, isDeleted, isUpdated } = useSelector(state => state.questions)

    const [value, setValue] = useState("")
    useEffect(() => {
        dispatch(getMyQuestions(value))
    }, [dispatch, value])

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch({ type: "CLEAR_ERRORS" })
        }
        if (isDeleted) {
            alert.success("Question deleted successfully")
            dispatch({ type: "DELETE_QUES_RESET" })
        }
        if (isUpdated) {
            alert.success("Question updated successfully")
            dispatch({ type: "UPDATE_QUES_RESET" })
        }
        dispatch(getMyQuestions())
    }, [dispatch, error, isDeleted, isUpdated, alert])
    return (
        <>
            <div className='right__border__line pt-4 pb-7 px-10 top-0 bottom-0 overflow-y-auto w-full' >
                <div className="flex justify-between items-center border-b pb-4">
                    <div className='sticky text-5xl font-bold text-center'>Your Questions</div>
                    <div className=" w-2/5 flex items-center gap-3 bg-gray-100 px-2 py-4 rounded-2xl my-2">
                        <div className="w-6 h-6">
                            <BiSearch className="w-full h-full" />
                        </div>
                        <input
                            type="search"
                            className="w-full bg-transparent border-none focus:outline-none"
                            placeholder="Search for your Queries here"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                </div>
                {loading ? <Loader /> :
                    myQues?.length ?
                        myQues.map(que => (
                            <HomeFeedPost key={que._id} question={que} />
                        ))
                        :
                        <div className='flex justify-center items-center h-96  flex-col'>
                            <MdCancel className='text-red-400 text-8xl' />
                            <div className='text-4xl font-bold opacity-60 text-center'>No Questions Found</div>
                        </div>
                }
            </div>
        </>
    )
}

export default UserQueries