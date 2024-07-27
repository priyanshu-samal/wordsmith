import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className=' flex items-center justify-center h-ful'>
        <UserProfile/>
    </div>
  )
}

export default page