import React from 'react';

import test__img from "../../images/test_img_2.jpg";

import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { MdSaveAlt } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


function HomeFeedPost({ question }) {
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/question/${id}`)
    }
    return (
        <>
            <div className='my-2 px-2 py-4 flex gap-8 bottom__border__line cursor-pointer hover:bg-gray-50' onClick={() => handleClick(question?._id)}>
                <div className="w-14 h-14">
                    <img src={test__img} alt="profile_pic" className="w-full h-full rounded-full" />
                </div>

                <div className='w-full'>
                    <div className='flex items-center gap-2 pt-2'>
                        <div className='font-medium text-gray-700 text-lg'>
                            {question?.user?.name}
                        </div>

                        <div className='font-medium text-gray-500 text-sm'>
                            @{question?.user?.email}
                        </div>

                        <div className='font-medium text-gray-400 text-xs'>
                            · 31m
                        </div>
                    </div>

                    <div className='pt-4 pb-2'>
                        <h1 className="font-bold">{question.title}</h1>
                    </div>
                    <div className='py-2'>
                        <p >{question.desc}</p>
                    </div>
                    <div className='py-2 mb-10'>
                        <div className='mt-2 flex flex-wrap gap-2'>
                            {question.tags.map((tag, index) => (
                                <button key={index} className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600 px-2'>#{tag}</button>
                            ))}
                        </div>
                    </div>
                    <div>
                        {
                            question.answers?.map((answer, index) => {

                                if (index === 0) {
                                    return <div className=' bottom__border__line'>
                                        <h1 className='font-bold'>Answers</h1>
                                        <div className=" flex my-3">
                                            <img src={test__img} alt="profile_pic" className=" rounded-full w-14 h-14" />
                                            <div className='font-medium text-gray-700 text-lg px-5'>
                                                {answer?.user?.name}
                                                <br />
                                                @{answer?.user?.email}
                                            </div>

                                            <div className='font-medium text-gray-400 text-xs'>
                                                · 31m
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-2 pt-2'>
                                        </div>
                                        <div>Answer: {answer?.answer}</div>
                                        <div className="hover:to-blue-500 py-6 justify-end flex">View more...</div>
                                    </div>

                                }
                                return null;
                            })
                        }
                    </div>

                    {/* <div className='w-full my-2'>
                        <img src="https://pbs.twimg.com/media/FOTkUIHagAESYZN?format=png&name=small" alt="post_img" className='w-full h-full' />
                    </div> */}

                    <div className='mt-8 w-full px-8' >
                        <div className='flex justify-between gap-5 text-bms-400'>
                            <div className='w-5 h-5 cursor-pointer'>
                                <AiOutlineLike className='w-full h-full' />
                            </div>
                            <div className='w-5 h-5 cursor-pointer'>
                                <AiOutlineDislike className='w-full h-full' />
                            </div>
                            <div className='w-5 h-5 cursor-pointer'>
                                <BiComment className='w-full h-full' />
                            </div>
                            <div className='w-5 h-5 cursor-pointer'>
                                <MdSaveAlt className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeFeedPost