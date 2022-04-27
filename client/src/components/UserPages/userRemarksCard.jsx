import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser';
import { AiFillDelete, AiFillSetting, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import Moment from 'react-moment';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
import { useAlert } from 'react-alert';
import { deleteAnswer, updateAnswer } from '../../Redux/Action/answerActions';
import ConfirmModal from '../confirmModal/ConfirmModal.component';
import { Dialog, DialogActions, DialogContent, Typography } from '@mui/material';

const UserRemarksCard = ({ answer }) => {

    const [value, setValue] = useState(answer?.answer || "")
    const [open, setOpen] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const dispatch = useDispatch()
    const alert = useAlert()

    const handleDelete = () => {
        setOpenDelete(true)
    }
    const handleUpdate = () => {
        setOpen(true)
    }
    const updateQues = () => {
        if (!value) {
            setOpen(false)
            return alert.error("Answer cannot be empty")
        }
        setOpen(false)
        dispatch(updateAnswer(answer._id, { answer: value }))
    }
    const deleteQues = () => {
        setOpenDelete(false)
        dispatch(deleteAnswer(answer._id))
    }
    const handleClose = () => {
        setOpen(false)
    }


    return (
        <>
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

                    <Link to={`/question/${answer.questionId}`} className='my-5'>
                        {ReactHtmlParser(answer?.answer)}
                    </Link>

                    <div className='mt-8 w-full px-8'>
                        <div className='flex justify-between gap-5 text-bms-400'>
                            <div className='w-5 h-5 cursor-pointer '>
                                <AiOutlineLike className='w-full h-full' />
                            </div>
                            <div className='w-5 h-5 cursor-pointer'>
                                <AiOutlineDislike className='w-full h-full' />
                            </div>
                            <div className='w-5 h-5 cursor-pointer text-green-400 hover:text-green-600'>
                                <AiFillSetting className='w-full h-full' onClick={() => handleUpdate(answer?.answer)} />
                            </div>
                            <div className='w-5 h-5 cursor-pointer text-red-400 hover:text-red-600' onClick={() => handleDelete(answer?._id)}>
                                <AiFillDelete className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Update Dialog  */}
            <Dialog open={open} onClose={handleClose} fullWidth >
                <Typography variant='h4' className='font-bold text-center pt-5' >Update Answer</Typography>
                <DialogContent>
                    <ReactQuill
                        theme='snow'
                        value={value}
                        onChange={setValue}
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

export default UserRemarksCard