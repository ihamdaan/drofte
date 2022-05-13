import React, { useEffect } from 'react';
import "../../index.css";
import HomeFeedPost from '../HomeFeed/homeFeedPost.component';
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader"
import 'react-quill/dist/quill.snow.css'
import { useAlert } from "react-alert";
import { getMyQuestions } from '../../Redux/Action/questionActions';
import { MdCancel } from 'react-icons/md';

const UserQueries = () => {

    const dispatch = useDispatch()
    const alert = useAlert()
    const { myQues, loading, error, isDeleted, isUpdated } = useSelector(state => state.questions)

    useEffect(() => {
        dispatch(getMyQuestions())
    }, [dispatch])

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
            <div className='right__border__line py-4 px-4 top-0 bottom-0 overflow-y-auto w-full' >
                <h1 className='bottom__border__line sticky pb-3'>Your Queries</h1>
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