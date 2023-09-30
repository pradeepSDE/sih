import React from 'react'

const Searchbar = () => {
  return (
    <>
    <form action="" className='ml-96 mt-10'>

     <input type="text" name="name" placeholder='search by plant name...' className='h-12 w-96 bg-slate-300 rounded-full'/>
      <button class=" h-12 w-30 bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2"
       type="submit">Submit</button>
    </form>
    </>
  )
}

export default Searchbar
