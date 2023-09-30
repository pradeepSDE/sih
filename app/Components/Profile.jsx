import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Webcam from 'react-webcam'
const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
}
const Profile = () => {
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
    console.log(pictureSrc)
    // document.write(pictureSrc)
    
  })
  return (
    <div className='align-items-center ml-96  '>
      <h2 className="mb-5 text-2xl   ml-16  ">
        Capture the plant's image
      </h2>
      <div className='ml-1'>
        {picture == '' ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
      </div>
      <div className='align-items-center ml-24'>
        {picture != '' ? (
          <button
            onClick={(e) => {
              e.preventDefault()
              setPicture()
              window.location.reload()
              
            }}
            className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 ml-24 py-2 px-4 rounded"
          >
            Retake
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className="btn btn-danger bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 ml-24 py-2 px-4 rounded"
          >
            Capture
          </button>
        )}
      </div>
      <img src={picture} alt="" />
    </div>
  )
}
export default Profile