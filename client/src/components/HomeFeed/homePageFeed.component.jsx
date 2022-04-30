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
import { Pagination, TextField, Typography } from '@mui/material';
import { useAlert } from "react-alert";
import { addQuestion, getAllQues } from '../../Redux/Action/questionActions';
import { MdCancel } from 'react-icons/md';


function HomePageFeed() {

  const dispatch = useDispatch()
  const alert = useAlert()
  const { ques, loading, error, isDeleted, isUpdated, isAdded, ResultsPerPage, filteredQuesCount } = useSelector(state => state.questions)
  const { user, message } = useSelector(state => state.user)
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [tag, setTag] = useState("");


  const handleSetOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false)
  }
  const setCurrentPageNo = (e, newpage) => {
    setPage(newpage)
  }
  const postData = () => {
    if (text.length <= 0 || value.length <= 0) {
      setOpen(false)
      return alert.error("Please fill all the fields")
    }
    if (tag && !tag.startsWith("#")) {
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
  }

  const numberOfPages = Math.ceil(filteredQuesCount / ResultsPerPage)

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch({ type: "CLEAR_ERRORS" })
    }
    if (message) {
      alert.success(message)
      dispatch({ type: "LOGOUT_RESET" })
    }
    if (isAdded) {
      alert.success("Question added successfully")
      dispatch({ type: "ADD_QUES_RESET" })
    }
    if (isDeleted) {
      alert.success("Question deleted successfully")
      dispatch({ type: "DELETE_QUES_RESET" })
    }
    if (isUpdated) {
      alert.success("Question updated successfully")
      dispatch({ type: "UPDATE_QUES_RESET" })
    }
  }, [dispatch, error, isDeleted, isUpdated, alert, isAdded, message])

  useEffect(() => {
    dispatch(getAllQues(undefined, page))
    // eslint-disable-next-line
  }, [page])
  return (
    <>
      {
        loading ? <Loader /> :
          <div className='right__border__line py-4 px-4 top-0 bottom-0 overflow-y-auto w-full' >
            <h1 className='sticky'>Home Feed</h1>

            <div className='my-2 py-2 flex gap-8 bottom__border__line justify-center items-center'>
              <div className='w-14 h-12 ml-3'>
                <img src={user?.profilePhoto?.url || "https://res.cloudinary.com/rajat0512/image/upload/v1642447946/E-commerce/avatar_gehm7u.jpg"} alt="profile_pic" className="w-full h-full rounded-full object-cover" />
              </div>

              <div className='w-full'>
                <div className='text-gray-400 cursor-pointer text-xl' onClick={handleSetOpen}>
                  Ask a Question!

                </div>
              </div>
            </div>
            {/* <InfiniteScroll
              loadMore={loadFunc}
              hasMore={numberOfPages > page}
              loader={<div className="loader" key={0}>Loading ...</div>}
            > */}
            {ques?.length ?
              ques.map(que => (
                <HomeFeedPost key={que._id} question={que} />
              )) :
              <div className='flex justify-center items-center h-96  flex-col'>
                <MdCancel className='text-red-400 text-8xl' />
                <div className='text-4xl font-bold opacity-60 text-center'>No Questions Found</div>
              </div>}
            {/* </InfiniteScroll> */}
            {
              ques?.length > 0 &&
              <div className='flex justify-center mt-4'>
                <Pagination count={numberOfPages || 1} onChange={setCurrentPageNo} page={page} size="large" color="primary" />
              </div>
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
              <DialogActions className='my-3'>
                <button className='bg-red-400 mx-2 mb-3 text-lg text-white font-medium px-4 py-1 rounded hover:bg-red-500' onClick={handleClose}>Cancel</button>
                <button className='bg-bms-400 mx-2 mb-3 text-lg text-white font-medium px-4 py-1 rounded hover:bg-bms-500' onClick={postData}>Post</button>
              </DialogActions>
            </Dialog>
          </div>
      }
    </>
  )
}

export default HomePageFeed;