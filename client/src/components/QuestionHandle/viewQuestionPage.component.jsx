import React, { createRef, useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment';

import { AiOutlineLike, AiOutlineDislike, AiFillDelete, AiFillSetting } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionDetails } from '../../Redux/Action/questionActions';
import Loader from '../Loader/Loader';
import ReactQuill from 'react-quill';
import { useAlert } from 'react-alert';
import { addAnswer, deleteAnswer, updateAnswer } from '../../Redux/Action/answerActions';
import ConfirmModal from '../confirmModal/ConfirmModal.component';
import { Dialog, DialogActions, DialogContent, Typography } from '@mui/material';


const ViewQuestionPage = () => {

    const { id } = useParams();
    const { currentQuestion: q, loading } = useSelector(state => state.questions);
    const { isAdded, isDeleted, isUpdated, error } = useSelector(state => state.answers);
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch()
    const ref = createRef(null)

    const [open, setOpen] = useState(false);
    const [answerId, setAnswerId] = useState('');
    const [value, setValue] = useState('');
    const [updatedValue, setUpdatedValue] = useState('');
    const [openDelete, setOpenDelete] = useState(false);

    const Navigate = useNavigate();
    const alert = useAlert()

    const handleDelete = (ansId) => {
        setOpenDelete(true)
        setAnswerId(ansId)
    }
    const handleUpdate = (ansId, ans) => {
        setOpen(true)
        setAnswerId(ansId)
        setUpdatedValue(ans)
    }
    const deleteQues = () => {
        setOpenDelete(false)
        dispatch(deleteAnswer(answerId))
    }

    const handleClick = () => {
        ref.current.scrollIntoView({ behavior: "smooth" })
    }

    const handleClose = () => {
        setOpen(false)
    }

    const postAnswer = () => {
        if (value.length <= 0) {
            return alert.error("Answer cannot be empty")
        }
        dispatch(addAnswer(id, { answer: value }))
    }
    const updateQues = () => {
        if (!updatedValue) {
            setOpen(false)
            return alert.error("Answer cannot be empty")
        }
        setOpen(false)
        dispatch(updateAnswer(answerId, { answer: updatedValue }))
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
        dispatch(getQuestionDetails(id))
    }, [isAdded, isDeleted, isUpdated, alert, error, dispatch, id])


    return (
        <>
            {
                loading ? <Loader /> :
                    <div className='right__border__line w-full top-0 bottom-0 overflow-auto bg-gray-50' >
                        <div className='flex gap-3 items-center sticky' >
                            <div className="w-8 h-8  cursor-pointer" onClick={() => Navigate(-1)}>
                                <IoIosArrowBack className="w-full h-full" />
                            </div>
                            <h1 className=' sticky pt-4 px-4 pb-3 bottom__border__line'>{q?.title}</h1>
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

                                        <div className="w-14 h-12">
                                            <img src={answer?.user?.profilePhoto?.url} alt="profile_pic" className="w-full h-full rounded-full object-cover" />
                                        </div>

                                        <div className='w-full'>
                                            <div className='flex items-center gap-2 relative'>
                                                <div className='font-medium text-gray-700 text-lg'>
                                                    {answer?.user?.name}
                                                </div>

                                                <div className='font-medium text-gray-500 text-sm'>
                                                    &lt; {answer?.user?.email} &gt;
                                                </div>

                                                <div className='font-medium text-gray-400 text-xs absolute right-0'>
                                                    <Moment fromNow>{answer?.createdAt}</Moment>
                                                </div>
                                            </div>

                                            <div className='py-5'>
                                                {ReactHtmlParser(answer?.answer)}
                                            </div>

                                            <div className='mt-8 w-full px-8'>
                                                <div className='flex justify-between gap-5 text-bms-400'>
                                                    <div className='w-5 h-5 cursor-pointer '>
                                                        <AiOutlineLike className='w-full h-full' />
                                                    </div>
                                                    <div className='w-5 h-5 cursor-pointer'>
                                                        <AiOutlineDislike className='w-full h-full' />
                                                    </div>
                                                    {
                                                        answer?.user?._id === user?._id ?
                                                            <>
                                                                <div className='w-5 h-5 cursor-pointer text-green-400 hover:text-green-600'>
                                                                    <AiFillSetting className='w-full h-full' onClick={() => handleUpdate(answer?._id, answer?.answer)} />
                                                                </div>
                                                                <div className='w-5 h-5 cursor-pointer text-red-400 hover:text-red-600' onClick={() => handleDelete(answer?._id)}>
                                                                    <AiFillDelete className='w-full h-full' />
                                                                </div>
                                                            </> : null
                                                    }
                                                </div>
                                            </div>
                                        </div>
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
            }
            {/* Update Dialog  */}
            <Dialog open={open} onClose={handleClose} fullWidth >
                <Typography variant='h4' className='font-bold text-center pt-5' >Update Answer</Typography>
                <DialogContent>
                    <ReactQuill
                        theme='snow'
                        value={updatedValue}
                        onChange={setUpdatedValue}
                        placeholder="Ask a query...*"
                        className='my-6'
                    />
                </DialogContent>
                <DialogActions>
                    <button className='bg-red-400 mx-2 mb-3 text-lg text-white font-medium px-4 py-1 rounded-2xl' onClick={handleClose}>Cancel</button>
                    <button className='bg-bms-400 mx-2 mb-3 text-lg text-white font-medium px-4 py-1 rounded-2xl' onClick={updateQues}>Save Changes</button>
                </DialogActions>
            </Dialog>
            <ConfirmModal open={openDelete} setOpen={setOpenDelete} onConfirm={deleteQues} title="Delete Question" desc="Are you sure you want to delete this question?" />

        </>
    )
}

export default ViewQuestionPage;