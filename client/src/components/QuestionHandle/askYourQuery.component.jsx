import React, { useEffect, useState } from 'react';
import "../../index.css";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { TextField } from '@mui/material';

const AskYourQuery = () => {

    const [body, setBody] = useState("");

    return (
        <>
            <div className='right__border__line py-4 px-4 top-0 bottom-0 overflow-y-auto w-full lg:w-3/4' >
                <div className='bottom__border__line sticky text-2xl font-medium pb-3'>Describe your query here in detail !</div>
                
                <div className='mb-5 mt-6'>
                    <TextField id="outlined-basic" label="Title*" variant="outlined" fullWidth />

                    <ReactQuill
                        placeholder='Ask Your Doubt / Share Your Thought'
                        className='my-5'
                    />

                    <TextField label="Tags" variant="outlined" fullWidth helperText="Please use # at the beginning of the tag" />

                    <div className='flex my-5 gap-3 flex-row-reverse'>
                        <button className='bg-bms-400 hover:bg-bms-600 text-lg text-white font-medium px-4 py-1 rounded-lg'>Post</button>
                        <button className='bg-red-400 hover:bg-red-600 text-lg text-white font-medium px-4 py-1 rounded-lg'>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AskYourQuery