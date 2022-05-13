import React, { useEffect, useState } from 'react';
import "../../index.css";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TextField } from '@mui/material';
import { addQuestion } from '../../Redux/Action/questionActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { useAlert } from 'react-alert';

const AskYourQuery = () => {

    const dispatch = useDispatch()
    const { loading, error, isAdded } = useSelector(state => state.questions)
    const alert = useAlert()

    const [body, setBody] = useState({
        title: '',
        text: '',
        tag: ''
    });

    const handleChange = (e) => {
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    }

    const postData = (e) => {
        e.preventDefault();
        if (body.title.length <= 0 || body.text.length <= 0) {
            return alert.error("Please fill all the fields")
        }
        if (!body.tag.startsWith("#")) {
            return alert.error("Tags must start with a hashtag(#)")
        }
        let tagsArray;
        if (body.tag) tagsArray = body.tag.split(' ');
        dispatch(addQuestion({
            title: body.title,
            desc: body.text,
            tags: tagsArray
        }))
        setBody({
            title: '',
            text: '',
            tag: ''
        })
    }

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch({ type: "CLEAR_ERRORS" })
        }
        if (isAdded) {
            alert.success("Question added successfully")
            dispatch({ type: "ADD_QUES_RESET" })
        }
    }, [dispatch, error, alert, isAdded])

    return (
        <>
            {
                loading ? <Loader /> :
                    <form className='right__border__line py-4 px-4 top-0 bottom-0 overflow-y-auto w-full' onSubmit={postData} >
                        <div className='bottom__border__line sticky text-3xl font-medium pb-3'>Describe your query here in detail !</div>

                        <div className='mb-5 mt-6 ask_question'>
                            <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth value={body.title} onChange={handleChange} name="title" required />

                            <ReactQuill
                                placeholder='Ask Your Doubt / Share Your Thought *'
                                className='my-5'
                                theme='snow'
                                value={body.text || ''}
                                onChange={(e) => setBody({ ...body, text: e })}
                            />

                            <TextField label="Tags" variant="outlined" fullWidth helperText="Please use # at the beginning of the tag" value={body.tag} onChange={handleChange} name="tag" />

                            <div className='flex my-5 gap-3'>
                                <button className='bg-bms-400 hover:bg-bms-600 text-xl text-white font-medium px-4 py-1 rounded-lg' type='submit'>Post</button>
                            </div>
                        </div>
                    </form>
            }
        </>
    )
}

export default AskYourQuery