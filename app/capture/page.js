"use client"
import React from 'react'
import Profile from '../Components/Profile'
import Navbar from '../Components/Navbar'

const page = () => {
  return (
    <div className='bg-[url("https://wallpapercave.com/wp/TjUG3t2.jpg")] h-full w-full'>
      <Navbar/>
      <Profile/>
    </div>
  )
}

export default page
