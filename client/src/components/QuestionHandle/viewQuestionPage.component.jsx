import React from 'react';
import "../../index.css";

import test__img from "../../images/test_img_2.jpg";
import Moment from 'react-moment';

import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { MdSaveAlt } from 'react-icons/md';

const ViewQuestionPage = () => {

    return (
        <>
            <div className='right__border__line w-full top-0 bottom-0 overflow-y-auto bg-gray-50' >
                <div className='bottom__border__line sticky pt-4 px-4 text-2xl font-medium pb-3 bg-white'>Question Title</div>
                
                <div className='py-4 px-4 flex gap-8 bottom__border__line bg-bms-50'>
                    <div className="w-14 h-14">
                        <img src={test__img} alt="profile_pic" className="w-full h-full rounded-full"/>
                    </div>

                    <div className='w-full'>
                        <div className='flex items-center gap-2 relative'>
                            <div className='font-medium text-gray-700 text-lg'>
                                Kevin Seate
                            </div>

                            <div className='font-medium text-gray-500 text-sm'>
                                @kevinSeate001
                            </div>

                            <div className='font-medium text-gray-400 text-xs absolute right-0'>
                                <Moment fromNow></Moment>
                            </div>
                        </div>

                        <div className='py-2'>
                            Nice to see @CivoCloud in the @CloudNativeFdn
                            Annual Survey 2021: https://cncf.io/wp-content/uploads/2022/02/CNCF-Annual-Survey-2021.pdf 🚀

                            Take a look at why developers and businesses are choosing Civo for their cloud native needs: https://civo.com/civo-shorts

                            Feel free to DM me with any queries 💬
                        </div>

                        <div className='w-full my-2'>
                            <img src="https://pbs.twimg.com/media/FOTkUIHagAESYZN?format=png&name=small" alt="post_img" className='w-full h-full'/>
                        </div>

                        <div className='mt-8 w-full px-8'>
                            <div className='flex justify-between gap-5 text-bms-400'>
                                <div className='w-5 h-5 cursor-pointer'>
                                    <AiOutlineLike className='w-full h-full'/>
                                </div>
                                <div className='w-5 h-5 cursor-pointer'>
                                    <AiOutlineDislike className='w-full h-full'/>
                                </div>
                                <div className='w-5 h-5 cursor-pointer'>
                                    <BiComment className='w-full h-full'/>
                                </div>
                                <div className='w-5 h-5 cursor-pointer'>
                                    <MdSaveAlt className='w-full h-full'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='px-4 py-6 text-xl font-semibold text-gray-600'>Remarks</div>

                <div className='py-4 pl-14 pr-4 flex gap-8 bottom__border__line bg-gray-50'>
                    <div className="object-cover w-14 h-14">
                        <img src={test__img} alt="profile_pic" className="w-full h-full rounded-full"/>
                    </div>

                    <div className='w-full'>
                        <div className='flex items-center gap-2 relative'>
                            <div className='font-medium text-gray-700 text-lg'>
                                Kevin Seate
                            </div>

                            <div className='font-medium text-gray-500 text-sm'>
                                @kevinSeate001
                            </div>

                            <div className='font-medium text-gray-400 text-xs absolute right-0'>
                                <Moment fromNow></Moment>
                            </div>
                        </div>

                        <div className='py-2'>
                            Nice to see @CivoCloud in the @CloudNativeFdn
                            Annual Survey 2021: https://cncf.io/wp-content/uploads/2022/02/CNCF-Annual-Survey-2021.pdf 🚀

                            Take a look at why developers and businesses are choosing Civo for their cloud native needs: https://civo.com/civo-shorts

                            Feel free to DM me with any queries 💬
                        </div>

                        <div className='mt-8 w-full px-8'>
                            <div className='flex justify-between gap-5 text-bms-400'>
                                <div className='w-5 h-5 cursor-pointer'>
                                    <AiOutlineLike className='w-full h-full'/>
                                </div>
                                <div className='w-5 h-5 cursor-pointer'>
                                    <AiOutlineDislike className='w-full h-full'/>
                                </div>
                                <div className='w-5 h-5 cursor-pointer'>
                                    <BiComment className='w-full h-full'/>
                                </div>
                                <div className='w-5 h-5 cursor-pointer'>
                                    <MdSaveAlt className='w-full h-full'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='py-4 pl-14 pr-4 flex gap-8 bottom__border__line bg-gray-50'>
                    <div className="object-cover w-14 h-14">
                        <img src={test__img} alt="profile_pic" className="w-full h-full rounded-full"/>
                    </div>

                    <div className='w-full'>
                        <div className='flex items-center gap-2 relative'>
                            <div className='font-medium text-gray-700 text-lg'>
                                Kevin Seate
                            </div>

                            <div className='font-medium text-gray-500 text-sm'>
                                @kevinSeate001
                            </div>

                            <div className='font-medium text-gray-400 text-xs absolute right-0'>
                                <Moment fromNow></Moment>
                            </div>
                        </div>

                        <div className='py-2'>
                            Nice to see @CivoCloud in the @CloudNativeFdn
                            Annual Survey 2021: https://cncf.io/wp-content/uploads/2022/02/CNCF-Annual-Survey-2021.pdf 🚀

                            Take a look at why developers and businesses are choosing Civo for their cloud native needs: https://civo.com/civo-shorts

                            Feel free to DM me with any queries 💬
                        </div>

                        <div className='mt-8 w-full px-8'>
                            <div className='flex justify-between gap-5 text-bms-400'>
                                <div className='w-5 h-5 cursor-pointer'>
                                    <AiOutlineLike className='w-full h-full'/>
                                </div>
                                <div className='w-5 h-5 cursor-pointer'>
                                    <AiOutlineDislike className='w-full h-full'/>
                                </div>
                                <div className='w-5 h-5 cursor-pointer'>
                                    <BiComment className='w-full h-full'/>
                                </div>
                                <div className='w-5 h-5 cursor-pointer'>
                                    <MdSaveAlt className='w-full h-full'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='py-4 pl-14 pr-4 flex gap-8 bottom__border__line bg-gray-50'>
                    <div className="object-cover w-14 h-14">
                        <img src={test__img} alt="profile_pic" className="w-full h-full rounded-full"/>
                    </div>

                    <div className='w-full'>
                        <div className='flex items-center gap-2 relative'>
                            <div className='font-medium text-gray-700 text-lg'>
                                Kevin Seate
                            </div>

                            <div className='font-medium text-gray-500 text-sm'>
                                @kevinSeate001
                            </div>

                            <div className='font-medium text-gray-400 text-xs absolute right-0'>
                                <Moment fromNow></Moment>
                            </div>
                        </div>

                        <div className='py-2'>
                            Nice to see @CivoCloud in the @CloudNativeFdn
                            Annual Survey 2021: https://cncf.io/wp-content/uploads/2022/02/CNCF-Annual-Survey-2021.pdf 🚀

                            Take a look at why developers and businesses are choosing Civo for their cloud native needs: https://civo.com/civo-shorts

                            Feel free to DM me with any queries 💬
                        </div>

                        <div className='mt-8 w-full px-8'>
                            <div className='flex justify-between gap-5 text-bms-400'>
                                <div className='w-5 h-5 cursor-pointer'>
                                    <AiOutlineLike className='w-full h-full'/>
                                </div>
                                <div className='w-5 h-5 cursor-pointer'>
                                    <AiOutlineDislike className='w-full h-full'/>
                                </div>
                                <div className='w-5 h-5 cursor-pointer'>
                                    <BiComment className='w-full h-full'/>
                                </div>
                                <div className='w-5 h-5 cursor-pointer'>
                                    <MdSaveAlt className='w-full h-full'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewQuestionPage;