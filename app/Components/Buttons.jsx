import React from 'react'
import Link from 'next/link'
import { Router, Switch, Route,Routes,useNavigate, Navigate, BrowserRouter} from "react-router-dom";
// import {Link} from 'react-router-dom'


const Buttons = () => {
  
  
  // const Searchimg =()=>{
  //  <Navigate to='../searchImage'/>
  // }
  return (
    <>
    <BrowserRouter>
    
      <div className='flex justify-between items-center mt-1 '  >
      <div>
      

    <Link href='../searchImage'>
 <button class=" h-14 w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2" >
        Search by image 
      </button>
    </Link>

      </div>
      <div>
        <Link href='../searchText'>

        <button class=" h-14 w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
        Search plants Name
      </button>
        </Link>
       </div>

      <div>
<Link href='../capture'>
        <button class=" h-14 w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4" >
        Capture image 
      </button>
</Link>

      </div>

    </div>
    </BrowserRouter>
    </>

  )
}

export default Buttons
