import React from 'react'
import { FaLocationPin } from 'react-icons/fa6'

function Hero() {
  return (
    <div className='bg-black text-white h-3/4 w-full flex md:flex-row flex-col justify-around items-start p-20'>
    <div className='p-5'>
      <h1 className='text-white-800 font-bold text-3xl pb-6'>
        WELCOME TO KÖLN CITY CRICKET CLUB
      </h1>
      <div className='flex justify-items-center'>
            <FaLocationPin className='text-2xl text-gray-500 mb-2' />
            <h4 className='ml-2 text-md pb-2 font-semibold text-gray-500 cursor-pointer hover:text-red-600'>Chorweiler, Köln</h4>
          </div>
    </div>
  </div>  )
}

export default Hero