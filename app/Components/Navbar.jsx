import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
   <>
    <div className='flex bg-white text-white font-medium justify-between items-center '>
        <div className='flex items-center fill-none  p-2.5'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmHubWLgUfGK7gb3EWdGXV3sM1ieiQUxNBg&usqp=CAU'alt" alt=""  width={300} height={50}/>
        
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/G20_India_2023_logo.svg/640px-G20_India_2023_logo.svg.png" alt=""  width={60} height={50} />
        </div>
        <div className='flex gap-3 ml-2 text-black'>
            
            <h2 className='text-xl'><Link className='block w-full text-m text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full 
      file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-green' href='/'>Home</Link></h2>
            
            <h2 className='text-xl '> <Link className='block w-full text-m text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100' href=''>About</Link></h2>
            <h2 className='text-xl'><Link className='block w-full text-m text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full 
      file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-green' href=''>Contact</Link></h2>
            
        </div>
    </div>
   </>
  )
}

export default Navbar
