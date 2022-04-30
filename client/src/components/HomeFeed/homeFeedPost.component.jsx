import ReactHtmlParser from 'react-html-parser';
import test__img from "../../images/test_img_2.jpg";
import Moment from 'react-moment';
import { MdDelete, MdUpdate } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteQuestion, updateQuestion } from '../../Redux/Action/questionActions';
import { Dialog, DialogActions, DialogContent, TextField, Typography } from '@mui/material';
import ReactQuill from 'react-quill';
import { useEffect, useState } from 'react';
import ConfirmModal from '../confirmModal/ConfirmModal.component';
import { useAlert } from 'react-alert';


function HomeFeedPost({ question }) {
    const alert = useAlert()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [text, setText] = useState("");
    const [tag, setTag] = useState("");
    const [value, setValue] = useState("");
    const [id, setId] = useState("");

    const handleUpdate = (id) => {
        setOpen(true);
        setId(id)
    }
    const handleDelete = (id) => {
        setOpenDelete(true)
        setId(id)
    }

    const handleClick = (id) => {
        navigate(`/question/${id}`)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const updateQues = () => {
        if (!text || !value) {
            setOpen(false)
            return alert.error("Please enter all the required fields")
        }
        if (tag && !tag.startsWith("#")) {
            setOpen(false)
            return alert.error("Tags must start with a hashtag(#)")
        }
        dispatch(updateQuestion(id, {
            title: text,
            desc: value,
            tags: tag === "" ? [] : tag.split(' ')
        }))
        setId("")
    }
    const deleteQues = () => {
        dispatch(deleteQuestion(id))
        setId("")
    }

    useEffect(() => {
        if (question) {
            setText(question.title)
            setValue(question.desc)
            setTag(question.tags.join(' '))
        }
    }, [question])


    return (
        <>
            <div className='my-2 px-2 pt-4 flex gap-8  cursor-pointer hover:bg-gray-100 transition-all duration-200 rounded' onClick={() => handleClick(question?._id)}>
                <div className='w-16 h-14 '>
                    <img src={question?.user?.profilePhoto?.url} alt="profile_pic" className="w-full h-full rounded-full object-cover" />
                </div>

                <div className='w-full  overflow-x-auto'>
                    <div className='flex items-center gap-2 pt-2 relative'>
                        <div className='font-medium text-gray-700 text-lg'>
                            {question?.user?.name}
                        </div>

                        <div className='font-medium text-gray-500 text-sm'>
                            &lt; {question?.user?.email}&gt;
                        </div>

                        <div className='font-medium text-gray-400 text-xs absolute right-0'>
                            <Moment fromNow>{question?.createdAt}</Moment>
                        </div>
                    </div>

                    <div className='pt-4 pb-2  overflow-x-auto'>
                        <h2 className="font-bold">{question?.title}</h2>
                    </div>
                    <div className='py-2 overflow-x-hidden'>
                        {ReactHtmlParser(question?.desc)}
                    </div>
                    <div className='py-2 mb-10'>
                        <div className='mt-2 flex flex-wrap gap-2'>
                            {question.tags?.map((tag, index) => (
                                <button key={index} className='bg-bms-100 p-1 rounded-lg text-gray-600 px-2'>{tag}</button>
                            ))}
                        </div>
                    </div>
                    <div>
                        {
                            question.answers?.map((answer, index) => {

                                if (index === 0) {
                                    return <div className=' bottom__border__line' key={answer?._id}>
                                        <h2 className='font-bold'>Answers</h2  >
                                        <div className=" flex my-3">
                                            <div className='w-14 h-14 '>
                                                <img src={answer?.user?.profilePhoto?.url || test__img} alt="profile_pic" className="w-full h-full rounded-full object-cover" />
                                            </div>
                                            <div className='font-medium text-gray-700 text-lg px-5'>
                                                {answer?.user?.name}
                                                <br />
                                                #{answer?.user?.email}
                                            </div>

                                            <div className='font-medium text-gray-400 text-xs'>
                                                <Moment fromNow>{answer?.createdAt}</Moment>
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-2 pt-2'>
                                        </div>
                                        <div>Answer: {ReactHtmlParser(answer?.answer)}</div>
                                        <div className="hover:to-blue-500 py-6 justify-end flex">View more...</div>
                                    </div>

                                }
                                return null;
                            })
                        }
                    </div>
                </div>
            </div>
            {
                question.user._id.toString() === user?._id.toString() ?
                    <div className='w-full px-3 bottom__border__line pb-3' >
                        <div className='flex justify-end text-bms-400'>
                            <div className='w-6 h-6 mx-2 cursor-pointer '>
                                <MdUpdate className='w-full h-full text-green-400 hover:text-green-600' onClick={() => handleUpdate(question._id)} />
                            </div>

                            <div className='w-6 h-6 mx-2 cursor-pointer '>
                                <MdDelete className='w-full h-full text-red-400 text-lg hover:text-red-600' onClick={() => handleDelete(question._id)} />
                            </div>
                        </div>
                    </div> :
                    <div className='bottom__border__line'></div>

            }
            {/* Update Dialog  */}
            <Dialog open={open} onClose={handleClose} fullWidth >
                <Typography variant='h4' className='font-bold text-center pt-5' >Update Question</Typography>
                <DialogContent>
                    <TextField id="outlined-basic" label="Title*" variant="outlined" fullWidth value={text} onChange={(e) => setText(e.target.value)} />
                    <ReactQuill
                        theme='snow'
                        value={value}
                        onChange={setValue}
                        placeholder="Ask a query...*"
                        className='my-6'
                    />
                    <TextField label="Tags" variant="outlined" fullWidth value={tag} onChange={(e) => setTag(e.target.value)} helperText="Please use # at the beginning of the tag" />
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

export default HomeFeedPost