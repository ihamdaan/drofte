import React, { useEffect, useState } from 'react';
import profile__test__img from "../../images/default_edit_profile_img.png";
import profile__bg__test__img from "../../images/default_edit_bg_img.jpg";

import { useNavigate } from "react-router-dom";

import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import AddIcon from '@mui/icons-material/Add';
import { TiEdit } from 'react-icons/ti';
import { IoIosArrowBack } from 'react-icons/io';


function ProfilePageFeed() {

  const Navigate = useNavigate();

  const navigate = useNavigate();

  return (
    <>
      
      <div className='right__border__line py-4 px-4 top-0 bottom-0 overflow-y-auto w-full bg-gray-50' >

        <div className='flex justify-between items-center'>
          <div className='flex gap-3 items-center cursor-pointer' onClick={() => Navigate(-1)}>
            <div className="w-8 h-8">
              <IoIosArrowBack className="w-full h-full" />
            </div>
            <div className='text-2xl font-medium'>Kanye Beast</div>
          </div>

          <div className='text-gray-600 text-xl font-medium'>
            Edit Profile
          </div>
        </div>

        <div className='profile_header relative h-80 mt-2'>
          <div className='object-cover h-60 w-full relative'>
            <img 
              src={profile__bg__test__img} 
              alt="background image" 
              className='w-full h-full border-b'
            />
            <div className='absolute bottom-1 right-1 cursor-pointer flex items-center gap-1 hover:bg-white p-2 rounded-xl hover:font-semibold'>
                <AddIcon className='cursor-pointer'/>
                Add Image
            </div>
          </div>
          <div className='absolute bottom-0 left-10 object-cover w-40 h-40 '>
            <div className='relative'>
                <img 
                src={profile__test__img} 
                alt="profile image" 
                className='w-full h-full rounded-full border' 
                />
                <TiEdit 
                title='Edit Your Profile Image'
                className='cursor-pointer absolute right-2 bottom-2 w-10 h-10'/>
            </div>
          </div>

          <div
            onClick={() => navigate("/password/change")} 
            className='py-1 rounded-2xl px-3 absolute bottom-10 right-0 ring-1 ring-red-500 font-medium hover:bg-red-100 cursor-pointer text-red-500'
          >
              Change Password
          </div>
        </div>

        <div className='mt-8'>

          <form className='my-6 mx-3'>
              <div className="mb-4">
                  <label htmlFor="name" className="text-lg font-medium">Change Profile Name</label> <br />
                  <input type="text" className="bg-bms-50 focus:bg-white w-3/4 text-md mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black" title="change your profile name here" value="Kanye Beast"/>
              </div>
              <div className="mb-4">
                  <label htmlFor="username" className="text-lg font-medium">Update Bio</label> <br />
                  <textarea 
                  name="bio"
                  rows="4" 
                  value="A DROFTE bio is a small public summary about yourself or your business displayed under your Twitter profile picture. In the bio, you can include limited characters of text, hashtags, emojis, and handles of profiles you're affiliated with." 
                  className="bg-bms-50 w-3/4 text-md mt-2 py-2 px-3 rounded focus:outline-bms-100 text-black" 
                  title="update your bio here" 
                  required />
              </div>

              <div className='social_handles mt-4 text-gray-500 w-3/4 '>
                <div className='flex gap-1 cursor-pointer items-center'>
                  <FaLinkedin className='w-6 h-6'/>
                  <div className='text-xl'>LinkedIn</div>
                    <input 
                    type="text" 
                    name="linkedin_handle" 
                    value="kanYesBee" 
                    className="bg-bms-50 w-full text-md ml-2 py-1 px-2 rounded focus:outline-bms-100 text-black" 
                    title="change your profile name here" 
                    required />
                  </div>

                  <div className='flex gap-1 mt-2 cursor-pointer items-center'>
                    <FaTwitter className='w-6 h-6'/>
                    <div className='text-xl'>Twitter</div>
                    <input 
                    type="text" 
                    name="twitter_handle" 
                    value="kanyee09" 
                    className="bg-bms-50 w-full text-md ml-2 py-1 px-2 rounded focus:outline-bms-100 text-black" 
                    title="change your profile name here" 
                    required />
                  </div>

                  <div className='flex gap-1 mt-2 cursor-pointer items-center'>
                    <FaInstagram className='w-6 h-6'/>
                    <div className='text-xl'>Instagram</div>
                    <input 
                    type="text" 
                    name="instagram_handle" 
                    value="beast_kanye" 
                    className="bg-bms-50 w-full text-md ml-2 py-1 px-2 rounded focus:outline-bms-100 text-black" 
                    title="change your profile name here" 
                    required />
                  </div>

                  <div className='flex gap-1 mt-2 items-center'>
                    <GrLocation className='w-6 h-6'/>
                    <div className='text-xl text-gray-800'>Location</div>
                    <input 
                    type="text" 
                    name="location" 
                    value="Chandigarh" 
                    className="bg-bms-50 w-full text-md ml-2 py-1 px-2 rounded focus:outline-bms-100 text-black" 
                    title="change your profile name here" 
                    required />
                  </div>
                </div>

                <div className='flex gap-3 mt-6 flex-row-reverse w-3/4'>

                  <button 
                    className="bg-bms-400 inline-flex justify-center px-4 py-2 text-sm font-medium text-white hover:text-bms-400 border border-transparent rounded-md hover:bg-bms-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-bms-500 mb-1" 
                    type="submit"
                    >
                    Save Changes
                  </button>
                  <button
                    onClick={() => Navigate(-1)}
                    type="button"
                    className="bg-red-100 inline-flex justify-center px-4 py-2 text-sm font-medium text-red-600 border border-transparent rounded-md hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 mb-1"
                    >
                    Cancel
                  </button>

                </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProfilePageFeed;