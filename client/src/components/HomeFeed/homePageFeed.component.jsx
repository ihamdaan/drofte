import React, { useEffect, useState } from 'react';
import "../../index.css";
import HomeFeedPost from './homeFeedPost.component';
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader"
import 'react-quill/dist/quill.snow.css'
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Input, TextField, Typography } from '@mui/material';

import test__img from "../../images/test_img.jpg";

// import { AiFillEdit, AiOutlineFolderAdd } from 'react-icons/ai';
// import { BsFillImageFill } from 'react-icons/bs';
// import { MdSystemUpdateAlt, MdTipsAndUpdates } from 'react-icons/md';
import { getAllQues } from '../../Redux/Action/questionActions';


function HomePageFeed() {

  const dispatch = useDispatch()
  const { ques, loading } = useSelector(state => state.questions)
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);


  const handleSetOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false)
  }
  const postData = () => {
    console.log(value);
    setOpen(false);
  }

  useEffect(() => {
    dispatch(getAllQues())
  }, [dispatch])
  return (
    <>
      {
        loading ? <Loader /> :
          <div className='right__border__line py-4 px-4 w-4/6 top-0 bottom-0 overflow-y-auto w-full' >
            <div className='sticky text-2xl font-medium'>Home Feed</div>

            <div className='my-2 py-2 flex gap-8 bottom__border__line'>
              <div className="w-14 h-14">
                <img src={test__img} alt="profile_pic" className="w-full h-full rounded-full" />
              </div>

              <div className='w-full'>
                <div className='text-gray-400 cursor-pointer text-xl pt-4' onClick={handleSetOpen}>
                  Ask a Question!

                </div>

                {/* <div className='flex justify-between mt-6 w-full items-center'>
                  <div className='flex gap-5 text-bms-400'>
                    <div className='w-6 h-6 cursor-pointer'>
                      <AiFillEdit className='w-full h-full' />
                    </div>
                    <div className='w-6 h-6 cursor-pointer'>
                      <BsFillImageFill className='w-full h-full' />
                    </div>
                    <div className='w-6 h-6 cursor-pointer'>
                      <AiOutlineFolderAdd className='w-full h-full' />
                    </div>
                    <div className='w-6 h-6 cursor-pointer'>
                      <MdSystemUpdateAlt className='w-full h-full' />
                    </div>
                    <div className='w-6 h-6 cursor-pointer'>
                      <MdTipsAndUpdates className='w-full h-full' />
                    </div>
                  </div>
                  <div>
                    <button className='bg-bms-400 mx-4 text-lg text-white font-medium px-4 py-1 rounded-2xl'>Share</button>
                  </div>
                </div> */}
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
                <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth />
                <ReactQuill
                  theme='snow'
                  value={value}
                  onChange={setValue}
                  placeholder="Ask a query..."
                  className='my-10'
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={postData}>Post</Button>
              </DialogActions>
            </Dialog>
          </div>
      }
    </>
  )
}

export default HomePageFeed;