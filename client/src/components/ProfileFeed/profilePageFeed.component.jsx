import profile__test__img from "../../images/test_img.jpg";
import profile__bg__test__img from "../../images/drofte_logo_blue.svg";

import { useNavigate } from "react-router-dom";

import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";


function ProfilePageFeed() {

  const { loading, user } = useSelector(state => state.user)

  const navigate = useNavigate()

  return (
    <>
      {
        loading ? <Loader />
          :
          <div className='right__border__line py-4 px-4 top-0 bottom-0 overflow-y-auto w-full' >
            <h1 className='sticky text-2xl font-medium'>My Profile</h1>

            <div className='profile_header relative h-80 mt-2'>
              <div className='object-cover h-60 w-full'>
                <img
                  src={profile__bg__test__img}
                  alt="background "
                  className='w-full h-full border-b'
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

              <div
                onClick={() => navigate("/profile/edit")}
                className='py-1 rounded-2xl px-3 absolute bottom-10 right-0 ring-1 ring-bms-400 font-medium hover:bg-bms-50 cursor-pointer'
              >
                Edit Profile
              </div>
            </div>

            <div className='mt-8'>
              <div className='font-bold text-xl'>{user.name}</div>
              <div className='text-sm text-gray-400'>{user.email}</div>
              <div className='text-sm text-gray-400 my-2'>A student of <strong> {user?.branch}</strong></div>

              <div className='mt-4 text-md text-gray-800'>
                {
                  user.bio ? user.bio : <div className="text-gray-400">
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
                {user.links?.LinkedIn &&
                  <div className='flex gap-1 cursor-pointer items-center'>
                    <FaLinkedin className='w-5 h-5' />
                    <a href={user.links.LinkedIn} target="_blank" rel="noreferrer noopener" className='hover:underline'>LinkedIn</a>
                  </div>}

                {user.links?.Twitter &&
                  <div className='flex gap-1 cursor-pointer items-center'>
                    <FaTwitter className='w-5 h-5' />
                    <a href={user.links.Twitter} className='hover:underline'>Twitter</a>
                  </div>}

                {user.links?.Instagram &&
                  <div className='flex gap-1 cursor-pointer items-center'>
                    <FaInstagram className='w-5 h-5' />
                    <a href={user.links.Instagram} className='hover:underline'>Instagram</a>
                  </div>}

              </div>
            </div>
          </div>
      }
    </>
  )
}

export default ProfilePageFeed;