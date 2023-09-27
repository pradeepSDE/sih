"use client"
import React from 'react'
import Link from 'next/link'
import Navbar from '../Components/Navbar'

import { BrowserRouter } from 'react-router-dom'
const page = () => {
    function submit(){
       
    }
  return (
    <div className='w-full h-full justify-items-center bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLNwlE4hKa-vnpKK7D_22MZmaVJiYif8I71vTaB_2Mr-bGJof8_5ViWZI2IfWh20rhHc&usqp=CAU")]'>
        <Navbar/>
    
    <h1 className='text-6xl  text-white mt-40 ml-80 justify-items-center w-full font-extrabold '>Ministry of Ayush </h1>
      
      <div>


     <div className='flex p-0 m-0'>

    
    <form className='ml-40 text-white mt-8' action={submit}>
            <input className='border rounded-lg   py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline'  placeholder='image..' type='file' >
            </input>
            
        </form>

    <form className='ml-40 text-white mt-8' action={submit}>
           
           <BrowserRouter>
           
           <Link href='../capture'>

           <button >Take a picture</button>
           </Link>
            
           </BrowserRouter>
        </form>
     </div>

    </div>
      </div>
  )
}

export default page
