import React, { useEffect } from 'react';
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader"
import 'react-quill/dist/quill.snow.css'
import { useAlert } from "react-alert";
import { getMyAnsweredQuestions } from '../../Redux/Action/questionActions';
import { MdCancel } from 'react-icons/md';
import UserRemarksCard from './userRemarksCard';

const UserRemarks = () => {

    const dispatch = useDispatch()
    const alert = useAlert()
    const { myAns, loading, error, isDeleted, isUpdated } = useSelector(state => state.answers)

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
        dispatch(getMyAnsweredQuestions())
    }, [dispatch, error, isDeleted, isUpdated, alert])
    return (
        <>
            <div className='right__border__line py-4 px-4 top-0 bottom-0 overflow-y-auto w-full' >
                <div className='bottom__border__line sticky text-2xl font-medium pb-3'>Your Remarks</div>
                {loading ? <Loader /> :
                    myAns?.length ?
                        myAns.map(ans => (

                            <UserRemarksCard key={ans._id} answer={ans} />
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