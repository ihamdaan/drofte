import React, { useEffect, useState } from 'react';
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { getAllQues, getAllTags } from '../../Redux/Action/questionActions';
import { useLocation } from "react-router-dom"

function HomePageTrending() {
  const [value, setValue] = useState("")
  const { tags } = useSelector(state => state.questions)
  const location = useLocation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllQues(value))
    dispatch(getAllTags())
  }, [dispatch, value])
  return (
    <>
      <div className='py-4 px-4 top-0 bottom-0 overflow-y-auto w-1/2'>

        {tags ? <>
          {
            location.pathname === "/" ? <div className="w-full flex items-center gap-3 bg-gray-100 py-3 px-2 rounded-3xl">
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
              : <h1 className='mb-6'>Trending</h1>
          }

          <div className='bg-gray-100 p-3 rounded-xl w-full mt-6'>
            <div className='text-lg font-semibold text-gray-600'>
              Recents
            </div>
            <div className='mt-2 flex flex-wrap gap-2'>
              {
                tags.slice(0, 10).map(tag => (
                  <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600' key={tag} onClick={() => setValue(tag.substring(1))}>{tag}</button>
                ))
              }
            </div>
          </div>

          <div className='bg-gray-100 p-3 rounded-xl w-full mt-6'>
            <div className='text-lg font-semibold text-gray-600'>
              Other tags
            </div>
            <div className='mt-2 flex flex-wrap gap-2'>
              {
                tags.slice(10, 25).map(tag => (
                  <button className='bg-bms-100 p-1 rounded-lg hover:bg-gray-200 text-gray-600' key={tag} onClick={() => setValue(tag.substring(1))}>{tag}</button>
                ))
              }
            </div>
          </div>
        </>
          :
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
          </div>}



      </div>
    </>
  )
}

export default HomePageTrending