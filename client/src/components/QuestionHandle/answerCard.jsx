import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment';

import { AiOutlineLike, AiOutlineDislike, AiFillDelete, AiFillSetting, AiFillLike, AiFillDislike } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import { useAlert } from 'react-alert';
import { deleteAnswer, DislikeAnswer, LikeAnswer, updateAnswer } from '../../Redux/Action/answerActions';
import ConfirmModal from '../confirmModal/ConfirmModal.component';
import { Dialog, DialogActions, DialogContent, Typography } from '@mui/material';

const AnswerCard = ({ answer }) => {

    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);
    const [answerId, setAnswerId] = useState('');
    const [updatedValue, setUpdatedValue] = useState('');
    const [openDelete, setOpenDelete] = useState(false);
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

    const updateQues = () => {
        if (!updatedValue) {
            setOpen(false)
            return alert.error("Answer cannot be empty")
        }
        setOpen(false)
        dispatch(updateAnswer(answerId, { answer: updatedValue }))
    }

    const deleteQues = () => {
        setOpenDelete(false)
        dispatch(deleteAnswer(answerId))
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <>
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

                            <div className='flex'>
                                <div >{answer?.likes.length}</div>
                                <div className="w-5 h-5 cursor-pointer">
                                    {
                                        answer.likes.includes(user?._id) ? <AiFillLike className='w-full h-full' onClick={() => dispatch(LikeAnswer(answer?._id))} /> :
                                            <AiOutlineLike className='w-full h-full' onClick={() => dispatch(LikeAnswer(answer?._id))} />
                                    }
                                </div>
                            </div>
                            <div className=' flex justify-center items-center'>
                                <div >{answer?.dislikes.length}</div>
                                <div className='w-5 h-5 cursor-pointer'>
                                    {
                                        answer.dislikes.includes(user?._id) ? <AiFillDislike className='w-full h-full' onClick={() => dispatch(DislikeAnswer(answer?._id))} /> :
                                            <AiOutlineDislike className='w-full h-full' onClick={() => dispatch(DislikeAnswer(answer?._id))} />
                                    }
                                </div>
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
        </>
    )
}

export default AnswerCard