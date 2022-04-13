import React, { useEffect, useState } from 'react';
import "../../index.css";
import HomeFeedPost from './homeFeedPost.component';
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader"
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { TextField, Typography } from '@mui/material';
import { useAlert } from "react-alert";
import test__img from "../../images/test_img.jpg";

// import { AiFillEdit, AiOutlineFolderAdd } from 'react-icons/ai';
// import { BsFillImageFill } from 'react-icons/bs';
// import { MdSystemUpdateAlt, MdTipsAndUpdates } from 'react-icons/md';
import { addQuestion, getAllQues } from '../../Redux/Action/questionActions';


function HomePageFeed() {

  const dispatch = useDispatch()
  const alert = useAlert()
  const { ques, loading, error, isDeleted } = useSelector(state => state.questions)
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [tag, setTag] = useState("");


  const handleSetOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false)
  }
  const postData = () => {
    if (text.length <= 0 || value.length <= 0) {
      setOpen(false)
      return alert.error("Please fill all the fields")
    }
    if (!tag.startsWith("#")) {
      setOpen(false)
      return alert.error("Tags must start with a hashtag(#)")
    }
    let tagsArray
    if (tag) tagsArray = tag.split(' ');
    dispatch(addQuestion({
      title: text,
      desc: value,
      tags: tagsArray
    }))
    setText("")
    setValue("")
    setTag("")
    setOpen(false);
    dispatch(getAllQues())
    alert.success("Question added successfully")
  }

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch({ type: "CLEAR_ERRORS" })
    }
    if (isDeleted) {
      alert.success("Question deleted successfully")
      dispatch({ type: "DELETE_QUES_RESET" })
    }
    dispatch(getAllQues())
  }, [dispatch, error, isDeleted, alert])
  return (
    <>
      {
        loading ? <Loader /> :
          <div className='right__border__line py-4 px-4 top-0 bottom-0 overflow-y-auto w-full' >
            <div className='sticky text-2xl font-medium'>Home Feed</div>

            <div className='my-2 py-2 flex gap-8 bottom__border__line'>
              <div className="object-cover w-14 h-14">
                <img src={test__img} alt="profile_pic" className="w-full h-full rounded-full" />
              </div>

              <div className='w-full'>
                <div className='text-gray-400 cursor-pointer text-xl pt-4' onClick={handleSetOpen}>
                  Ask your Questions here!

                </div>
              </div>
            </div>
            {
              ques?.map(que => (
                <HomeFeedPost key={que._id} question={que} />
              ))
            }
            <Dialog open={open} onClose={handleClose} fullWidth >
              <Typography variant='h4' className='font-bold text-center pt-5' >Add a Question</Typography>
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
                <button className='bg-bms-400 mx-2 mb-3 text-lg text-white font-medium px-4 py-1 rounded-2xl' onClick={postData}>Post</button>
              </DialogActions>
            </Dialog>
          </div>
      }
    </>
  )
}

export default HomePageFeed;