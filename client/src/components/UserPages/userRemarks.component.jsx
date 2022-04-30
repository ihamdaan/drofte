import React, { useEffect } from 'react';
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import 'react-quill/dist/quill.snow.css'
import { useAlert } from "react-alert";
import { getMyAnsweredQuestions } from '../../Redux/Action/questionActions';
import { MdCancel } from 'react-icons/md';
import AnswerCard from '../QuestionHandle/answerCard';
import { Link } from 'react-router-dom';
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const UserRemarks = () => {

    const dispatch = useDispatch()
    const alert = useAlert()
    const { myAns, error, isDeleted, isUpdated, message } = useSelector(state => state.answers)

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch({ type: "CLEAR_ERRORS" })
        }
        if (isUpdated) {
            alert.success("Answer updated successfully")
            dispatch({ type: "UPDATE_ANSWER_RESET" })
        }
        if (isDeleted) {
            alert.success("Answer deleted successfully")
            dispatch({ type: "DELETE_ANSWER_RESET" })
        }
        if (message) {
            alert.success(message)
            dispatch({ type: "RESET_MESSAGE" })
        }
        dispatch(getMyAnsweredQuestions())
    }, [dispatch, error, isDeleted, isUpdated, alert, message])
    return (
        <>
            <div className='right__border__line py-4 px-4 top-0 bottom-0 overflow-y-auto w-full' >
                <h1 className='bottom__border__line sticky font-medium pb-3'>Your Remarks</h1>
                {
                    myAns?.length ?
                        myAns.map(ans => (
                            <div className=' bottom__border__line bg-gray-50' key={ans?._id}>
                                <div className='py-4 pl-14 px-4 flex gap-8' >
                                    <AnswerCard answer={ans} />
                                </div>
                                <Link to={`/question/${ans.questionId}`} className=" text-right p-2 flex items-center gap-3 justify-end">
                                    Navigate to question
                                    <BsFillArrowRightSquareFill className='w-5 h-5' />
                                </Link>
                            </div>

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

export default UserRemarks