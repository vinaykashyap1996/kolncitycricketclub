import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaEnvelope, FaLocationPin, FaPhone } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-gray-300 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
      <div className='p-5'>
        <ul>
          <p className='text-gray-800 font-bold text-3xl pb-6'>
            SOCIAL MEDIA
          </p>
          <div className='flex gap-6 pb-5'>
            <FaInstagram className='text-2xl cursor-pointer hover:text-red-600' />
            <FaFacebook className='text-2xl cursor-pointer hover:text-red-600' />
          </div>
        </ul>
      </div>
      <div className='p-5'>
        <ul>
          <p className='text-gray-800 font-bold text-2xl pb-4'>LINKS</p>
          <li className='text-gray-500 text-md pb-2 font-semibold cursor-pointer hover:text-red-600'>
            ABOUT US
          </li>
          <li className='text-gray-500 text-md pb-2 font-semibold cursor-pointer hover:text-red-600'>
            MEMBERS
          </li>
          <li className='text-gray-500 text-md pb-2 font-semibold cursor-pointer hover:text-red-600'>
            TEAM
          </li>
          <li className='text-gray-500 text-md pb-2 font-semibold cursor-pointer hover:text-red-600'>
            GALLERY
          </li>
          <li className='text-gray-500 text-md pb-2 font-semibold cursor-pointer hover:text-red-600'>
            HONOUR BOARD
          </li>
          <li className='text-gray-500 text-md pb-2 font-semibold cursor-pointer hover:text-red-600'>
            CONTACT US
          </li>
        </ul>
      </div>
      <div className='p-5'>
        <ul>
          <p className='text-gray-800 font-bold text-3xl pb-6'>GET IN TOUCH</p>
          <div className='flex justify-items-center'>
            <FaLocationPin className='text-2xl text-gray-500 mb-2' />
            <p className='ml-2 text-md pb-2 font-semibold text-gray-500 cursor-pointer hover:text-red-600'>Chorweiler, Köln</p>
          </div>
          <div className='flex justify-items-center'>

          <FaPhone className='text-2xl text-gray-500 mb-2' />
          <p className='ml-2 text-md pb-2 font-semibold text-gray-500 cursor-pointer hover:text-red-600'>+49 1626502463</p>
          </div>
          <div className='flex justify-items-center'>

          <FaEnvelope className='text-2xl text-gray-500' />
          <p className='ml-2 text-md pb-2 font-semibold text-gray-500 cursor-pointer hover:text-red-600'>kolncitycricketclub@gmail.com</p>
        </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
