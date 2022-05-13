import profile__test__img from "../../images/test_img.jpg";
import profile__bg__test__img from "../../images/drofte_logo_blue.svg";

import { useNavigate, useParams } from "react-router-dom";

import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import { getUserDetails } from "../../Redux/Action/userActions";
import { IoIosArrowBack } from "react-icons/io";
import { useAlert } from "react-alert";
import Metadata from "../Metadata";


function UserProfilePageFeed() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const alert = useAlert()
    const Navigate = useNavigate()
    const { user, loading, error } = useSelector(state => state.profile)

    useEffect(() => {
        if (error) {
            alert.error(error)
            Navigate(-1)
            dispatch({ type: "CLEAR_ERRORS" })
        }
        dispatch(getUserDetails(id))

    }, [dispatch, id, error, Navigate, alert])



    return (
        <>
            {
                loading ? <Loader />
                    :
                    <div className='right__border__line py-4 px-4 top-0 bottom-0 overflow-y-auto w-full' >
                        <Metadata title={`${user?.name}'s Profile | DROFTE`} />
                        <div className='flex gap-3 items-center cursor-pointer' onClick={() => Navigate(-1)}>
                            <div className="w-8 h-8">
                                <IoIosArrowBack className="w-full h-full" />
                            </div>
                            <div className='text-2xl font-medium'>{user?.name}'s Profile</div>
                        </div>

                        <div className='profile_header relative h-80 mt-2'>
                            <div className=' h-60 w-full'>
                                <img
                                    src={user?.coverPhoto?.url || profile__bg__test__img}
                                    alt="background "
                                    className='w-full h-full border-b object-cover'
                                />
                            </div>
                            <div className='absolute bottom-0 left-10 w-40 h-40 '>
                                <div className='relative w-full h-full  rounded-full'>
                                    <img
                                        src={user?.profilePhoto?.url || profile__test__img}
                                        alt="profile "
                                        className='w-full h-full rounded-full  object-cover border'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='mt-8'>
                            <div className='font-bold text-xl my-3'>{user?.name}</div>
                            <div className='text-sm text-gray-400 my-3'>{user?.email}</div>
                            {
                                user?.branch &&
                                <div className='text-sm text-gray-400 my-3'>A student of <strong> {user.branch}</strong></div>
                            }

                            <div className='mt-4 text-md text-gray-800'>
                                {
                                    user?.bio ? user.bio : <div className="text-gray-400">
                                        A DROFTE bio is a small public summary about yourself  under your profile picture. In the bio, you can characters oftext, hashtags, emojis, and handles of profiles you're affiliated with.

                                        <br />
                                        <br />
                                        <span className="text-gray-500">
                                            <span className="font-bold">Example:</span>
                                            <br />
                                            <span className="text-gray-500">
                                                I am a software engineer, and I love to build things.
                                            </span>
                                        </span>
                                        <br />
                                        <br />
                                        <div className="text-right">CLICK ON EDIT PROFILE TO EDIT YOUR BIO</div>
                                    </div>
                                }
                            </div>

                            <div className='social_handles flex justify-between mt-4 text-gray-500 w-3/4 items-center'>
                                {user?.links?.LinkedIn &&
                                    <div className='flex gap-1 cursor-pointer items-center'>
                                        <FaLinkedin className='w-5 h-5 text-blue-900' />
                                        <a href={user.links.LinkedIn} target="_blank" rel="noreferrer noopener" className='hover:underline'>LinkedIn</a>
                                    </div>}

                                {user?.links?.Twitter &&
                                    <div className='flex gap-1 cursor-pointer items-center'>
                                        <FaTwitter className='w-5 h-5 text-blue-400' />
                                        <a href={user.links.Twitter} target="_blank" rel="noreferrer noopener" className='hover:underline'>Twitter</a>
                                    </div>}

                                {user?.links?.Instagram &&
                                    <div className='flex gap-1 cursor-pointer items-center'>
                                        <FaInstagram className='w-5 h-5 text-pink-500' />
                                        <a href={user.links.Instagram} target="_blank" rel="noreferrer noopener" className='hover:underline'>Instagram</a>
                                    </div>}

                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default UserProfilePageFeed;