import React, { useEffect, useState } from 'react';
import { BiSearch } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAllQues, getMyAnsweredQuestions } from '../../Redux/Action/questionActions';

function HomePageTrending() {
  const [value, setValue] = useState("")
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === '/') dispatch(getAllQues(value))
    if (location.pathname === '/remarks') dispatch(getMyAnsweredQuestions(value))
  }, [dispatch, value])
  return (
    <>
      <div className='py-4 px-4 top-0 bottom-0 overflow-y-auto w-1/2'>

        <div className="w-full flex items-center gap-3 bg-gray-100 py-3 px-2 rounded-3xl">
          <div className="w-6 h-6">
            <BiSearch className="w-full h-full" />
          </div>
          <input
            type="search"
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search for your Queries here"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className='bg-gray-100 p-3 rounded-xl w-full mt-6'>
          <div className='text-lg font-semibold text-gray-600'>
            Technology
          </div>
          <div className='mt-2 flex flex-wrap gap-2'>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#technology</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#tech</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#techie</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#it</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#cybersecurity</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#robotics</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#ai</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#programmer</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#computerscience</button>
          </div>
        </div>

        <div className='bg-gray-100 p-3 rounded-xl w-full mt-6'>
          <div className='text-lg font-semibold text-gray-600'>
            Finance
          </div>
          <div className='mt-2 flex flex-wrap gap-2'>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#finance</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#money</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#business</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#forex</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#personalfinance</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#crypto</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#stocks</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#trader</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#revenue</button>
          </div>
        </div>

        <div className='bg-gray-100 p-3 rounded-xl w-full mt-6'>
          <div className='text-lg font-semibold text-gray-600'>
            Placement
          </div>
          <div className='mt-2 flex flex-wrap gap-2'>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#training</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#recruitment</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#career</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#placements</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#education</button>
            <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600'>#jobs</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default HomePageTrending