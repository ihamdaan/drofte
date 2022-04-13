import React, { useEffect, useState } from 'react';

import { useNavigate } from "react-router-dom";

import { IoIosArrowBack } from 'react-icons/io';

import change__pass__img from "../../images/change_password.svg";


function ChangePassPage() {

  const Navigate = useNavigate()

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

          <div className='text-red-300 text-xl font-medium'>
            Change Password
          </div>
        </div>

        <div className='mt-2'>
            <img src={change__pass__img} alt="change password image" />
        </div>

        <div className='mx-16'>
            <div className='mt-8'>
                <h1 className='font-bold text-2xl text-bms-500'>
                    Want to change your drofte authentication?
                </h1>
                <h3 className='my-4 text-gray-400 text-sm'>
                    Must contain at least 8 characters (12+ recommended), one uppercase letter, one lowercase letter, at least one number, at least one special character.
                </h3>
            </div>

            <div>
                <form className="my-2">
                    <div className="mb-6">
                        <label htmlFor="password" className="text-lg">Current Password</label> <br />
                        <input type="password" placeholder="******************" className=" w-3/4 text-black text-md mt-2 py-2 px-3 rounded focus:outline-bms-100" required name="password"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="text-lg">New Password</label> <br />
                        <input type="password" placeholder="******************" className=" w-3/4 text-black text-md mt-2 py-2 px-3 rounded focus:outline-bms-100" required name="password"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="text-lg">Re-enter New Password</label> <br />
                        <input type="password" placeholder="******************" className=" w-3/4 text-black text-md mt-2 py-2 px-3 rounded focus:outline-bms-100" required name="confirmPassword"/>
                    </div>

                    <div className='flex gap-3 mt-6 flex-row-reverse w-3/4'>

                        <button 
                            className="bg-bms-400 inline-flex justify-center px-4 py-2 text-sm font-medium text-white hover:text-bms-400 border border-transparent rounded-md hover:bg-bms-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-bms-500 mb-1" 
                            type="submit"
                            >
                            Update Password
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

      </div>
    </>
  )
}

export default ChangePassPage;