"use client"

import React from 'react'
import AppCard from './Components/Swiper'
import Navbar from './Components/Navbar';
import  Buttons from './Components/Buttons'
import Profile from './Components/Profile'
import './globals.css'

import handleSubmit from './handler/handlesubmit';
import { useRef } from 'react';

// import MyCarousel from './Components/Carousel'
const page = () => {

  const dataRef = useRef()
 
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }

  return (
    <>
    <Navbar/>
  
        <AppCard />
        <Buttons />
    

    
    </>
  );
};




export default page;
