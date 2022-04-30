import React, { createRef, useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment';

import { MdCancel } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionDetails } from '../../Redux/Action/questionActions';
import ReactQuill from 'react-quill';
import { useAlert } from 'react-alert';
import { addAnswer } from '../../Redux/Action/answerActions';
import AnswerCard from './answerCard';


const ViewQuestionPage = () => {

    const { id } = useParams();
    const { currentQuestion: q } = useSelector(state => state.questions);
    const { isAdded, isDeleted, isUpdated, error, message } = useSelector(state => state.answers);
    const dispatch = useDispatch()
    const ref = createRef(null)

    const [value, setValue] = useState('');

    const Navigate = useNavigate();
    const alert = useAlert()

    const handleClick = () => {
        ref.current.scrollIntoView({ behavior: "smooth" })
    }


    const postAnswer = () => {
        if (value.length <= 0) {
            return alert.error("Answer cannot be empty")
        }
        dispatch(addAnswer(id, { answer: value }))
    }


    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch({ type: "CLEAR_ERRORS" })
        }
        if (isAdded) {
            alert.success("Answer added successfully")
            dispatch({ type: "NEW_ANSWER_RESET" })
            setValue("")
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
        dispatch(getQuestionDetails(id))
    }, [isAdded, isDeleted, isUpdated, alert, error, dispatch, message, id])


    return (
        <>

            <div className='right__border__line w-full top-0 bottom-0 overflow-auto bg-gray-50' >
                <div className='flex gap-3 items-center sticky' >
                    <div className="w-8 h-8  cursor-pointer" onClick={() => Navigate(-1)}>
                        <IoIosArrowBack className="w-full h-full" />
                    </div>
                    <h1 className='sticky pt-4 px-4 pb-3 bottom__border__line'>{q?.title}</h1>
                </div>

                <div className='py-4 px-4 flex gap-8 bottom__border__line  cursor-default'>
                    <div className="w-14 h-12">
                        <img src={q?.user?.profilePhoto?.url} alt="profile_pic" className="w-full h-full rounded-full object-cover" />
                    </div>

                    <div className='w-full overflow-x-auto'>
                        <div className='flex items-center gap-2 relative'>
                            <div>
                                <div className='text-lg font-bold text-gray-700'>
                                    {q?.user?.name}
                                </div>

                                <div className='font-medium text-gray-500 text-sm'>
                                    &lt; {q?.user?.email} &gt;
                                </div>
                            </div>

                            <div className='font-medium  text-gray-400 text-xs absolute right-0'>
                                <Moment fromNow>{q?.user?.date}</Moment>
                            </div>
                        </div>

                        <div className='pb-2 pt-5 text-justify'>
                            {ReactHtmlParser(q?.desc)}
                        </div>
                        <div className='py-2 mb-10'>
                            <div className='mt-2 flex flex-wrap gap-2'>
                                {q?.tags?.map((tag, index) => (
                                    <button key={index} className='bg-bms-100 p-1 rounded-lg text-gray-600 px-2 cursor-default'>{tag}</button>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex justify-between items-center p-6'>
                    <div className=' text-xl font-semibold text-gray-600'>Remarks</div>
                    <button className='text-xl font-semibold bg-green-500 px-3 py-1 rounded text-white hover:bg-green-600 shadow drop-shadow-lg' onClick={handleClick}>Add Answer</button>
                </div>

                {
                    q?.answers.length ?
                        q.answers.map((answer) => (
                            <div className='py-4 pl-14 px-4 flex gap-8 bottom__border__line bg-gray-50' key={answer?._id}>
                                <AnswerCard answer={answer} />
                            </div>
                        ))
                        : <div className='flex flex-col text-red-500 justify-center items-center h-60 bottom__border__line'>
                            <div className='w-16 h-16 cursor-pointer'>
                                <MdCancel className='w-full h-full' />
                            </div>
                            <h2> No answers yet.</h2>
                        </div>
                }
                <h1 className='px-6 my-4 '>Add an Answer</h1>
                <div ref={ref} className="px-3">
                    <ReactQuill
                        theme='snow'
                        value={value}
                        onChange={setValue}
                        placeholder="Add a new answer..."
                        className='mb-6'
                    />
                    <button type='button' className='font-semibold bg-green-500 px-3 py-1 rounded text-white hover:bg-green-600 shadow drop-shadow-lg' onClick={postAnswer}>Post</button>
                </div>
                <div className=' bottom__border__line my-3'></div>
            </div>


        </>
    )
}

export default ViewQuestionPage;