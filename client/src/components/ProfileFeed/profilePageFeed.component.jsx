import React, { useEffect, useState } from 'react';
import profile__test__img from "../../images/test_img.jpg";
import profile__bg__test__img from "../../images/bg_test_img.jpg";

import { useNavigate } from "react-router-dom";

import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';


function ProfilePageFeed() {
  
  const navigate = useNavigate()

  return (
    <>
      
      <div className='right__border__line py-4 px-4 top-0 bottom-0 overflow-y-auto w-full' >
        <div className='sticky text-2xl font-medium'>Profile</div>

        <div className='profile_header relative h-80 mt-2'>
          <div className='object-cover h-60 w-full'>
            <img 
              src={profile__bg__test__img} 
              alt="background image" 
              className='w-full h-full border-b'
            />
          </div>
          <div className='absolute bottom-0 left-10 object-cover w-40 h-40 '>
            <img 
              src={profile__test__img} 
              alt="profile image" 
              className='w-full h-full rounded-full border' 
            />
          </div>

          <div
            onClick={() => navigate("/profile/edit")} 
            className='py-1 rounded-2xl px-3 absolute bottom-10 right-0 ring-1 ring-bms-400 font-medium hover:bg-bms-50 cursor-pointer'
          >
              Edit Profile
          </div>
        </div>

        <div className='mt-8'>
          <div className='font-bold text-xl'>Kanye Beast</div>
          <div className='text-sm text-gray-400'>20CGT1022@cuchd.in</div>

          <div className='mt-4 text-md text-gray-800'>
            A DROFTE bio is a small public summary about yourself or your business displayed 
            under your Twitter profile picture. In the bio, you can include limited characters of 
            text, hashtags, emojis, and handles of profiles you're affiliated with.
          </div>

          <div className='social_handles flex justify-between mt-4 text-gray-500 w-3/4 items-center'>

            <div className='flex gap-1 cursor-pointer items-center'>
              <FaLinkedin className='w-5 h-5'/>
              <div className='hover:underline'>kanYesBee</div>
            </div>

            <div className='flex gap-1 cursor-pointer items-center'>
              <FaTwitter className='w-5 h-5'/>
              <div className='hover:underline'>kanyee09</div>
            </div>

            <div className='flex gap-1 cursor-pointer items-center'>
              <FaInstagram className='w-5 h-5'/>
              <div className='hover:underline'>beast_kanye</div>
            </div>

            <div className='flex gap-1 items-center'>
              <GrLocation className='w-5 h-5'/>
              <div className='text-gray-800'>Chandigarh</div>
            </div>

          </div>

          <div className='mt-4 flex gap-2 items-center'>
            <button className='bg-bms-400 py-1 px-3 text-white rounded-xl font-semibold hover:bg-bms-300'>connect</button>
            <div className='text-3xl'>·</div> 
            <div className='cursor-pointer hover:underline'>52 connections</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePageFeed;