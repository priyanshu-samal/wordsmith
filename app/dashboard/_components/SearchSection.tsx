import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className='p-10 text-white flex-col flex justify-center items-center  bg-gradient-to-r from-gray-900 via-gray-700 to-gray-300'>
        <h2 className='text-3xl font-bold '>Browse All Template</h2>
        <p>What would you like to create today?</p>
        <div className='w-full flex justify-center'>
        <div className='flex gap-2 my-5 w-[50%] bg-white items-center p-2 border rounded-md'>
           <Search className='text-blue-700'/>
           <input onChange={(event)=>onSearchInput(event.target.value)} type="text" placeholder='Search ' className='bg-transparent w-full outline-none text-black' />
        </div>
        </div>
    </div>
  )
}

export default SearchSection