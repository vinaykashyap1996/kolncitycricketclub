import Link from 'next/link';
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
            <a href='https://www.instagram.com/koelncitycricketclub/?hl=en'>
            <FaInstagram className='text-2xl cursor-pointer hover:text-red-600' />
            </a>
            <a href='https://www.facebook.com/people/K%25C3%25B6ln-City-Cricket-Club-eV/61556718125901/'>
            <FaFacebook className='text-2xl cursor-pointer hover:text-red-600' />
            </a>
          </div>
        </ul>
      </div>
      <div className='p-5'>
        <ul>
          <p className='text-gray-800 font-bold text-2xl pb-4'>LINKS</p>
          <li className='text-gray-500 text-md pb-2 font-semibold cursor-pointer hover:text-red-600'>
          <a href='/about'>ABOUT US</a>
          </li>
          <li className='text-gray-500 text-md pb-2 font-semibold cursor-pointer hover:text-red-600'>
          <a href='/members'>MEMBERS</a>
          </li>
          <li className='text-gray-500 text-md pb-2 font-semibold cursor-pointer hover:text-red-600'>
          <a href='/team'>TEAM</a>

          </li>
          <li className='text-gray-500 text-md pb-2 font-semibold cursor-pointer hover:text-red-600'>
          <a href='/gallery'>GALLARY</a>

          </li>
          <li className='text-gray-500 text-md pb-2 font-semibold cursor-pointer hover:text-red-600'>
            <a href='/honours'>HONOUR BOARD</a>
          </li>
          <li className='text-gray-500 text-md pb-2 font-semibold cursor-pointer hover:text-red-600'>
          <a href='/contact'>CONTACT US</a>
          </li>
        </ul>
      </div>
      <div className='p-5'>
        <ul>
          <p className='text-gray-800 font-bold text-3xl pb-6'>GET IN TOUCH</p>
          <div className='flex justify-items-center'>
            <FaLocationPin className='text-2xl text-gray-500 mb-2' />
            <a href='https://www.google.com/maps/place/Chorweiler+Cricket+Ground/@51.0285212,6.8988493,17z/data=!3m1!4b1!4m6!3m5!1s0x47bf31daa67febb9:0x9db8e696b10288e3!8m2!3d51.0285179!4d6.9014242!16s%2Fg%2F11c6ygp5h7?entry=ttu'>
            <p className='ml-2 text-md pb-2 font-semibold text-gray-500 cursor-pointer hover:text-red-600'>Chorweiler, Köln</p>
            </a>
          </div>
          <div className='flex justify-items-center'>

          <FaPhone className='text-2xl text-gray-500 mb-2' />
          <p className='ml-2 text-md pb-2 font-semibold text-gray-500 cursor-pointer hover:text-red-600'>+49 1626502463</p>
          </div>
          <div className='flex justify-items-center'>

          <FaEnvelope className='text-2xl text-gray-500' />
          <a href="mailto:kolncitycricketclub@gmail.com">
          <p className='ml-2 text-md pb-2 font-semibold text-gray-500 cursor-pointer hover:text-red-600'>kolncitycricketclub@gmail.com</p>
          </a>
        </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
