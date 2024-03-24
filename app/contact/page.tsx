'use client';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import React, { useState } from 'react';

function Contact() {
  return (
    <>
      <Navbar />
      <div className=' bg-black h-full text-white text-center'>
        <div className='flex justify-between'>
          <div className='flex flex-col items-start m-8'>
            *** Contact us via phone ***
            <div className='w-full max-w-3xl'>
              <form method='POST' action="mailto:kolncitycricketclub@gmail.com" className='bg-gray-300 shadow-md rounded px-8 pt-10 pb-8 mb-4'>
              <h2 className='text-black text-transform: uppercase text-2xl mb-4'>HAVE ANY QUERY? PLEASE CONTACT US!</h2>

                <div className='mb-4 flex'>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='username'
                    type='text'
                    placeholder='Firstname'
                  />
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='username'
                    type='text'
                    placeholder='Lastname'
                  />
                </div>
                <div className='mb-6'>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                    id='email'
                    type='email'
                    placeholder='E-mail'
                  />
                </div>
                <div className='mb-6'>
                  <textarea
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                    id='message'
                    placeholder='Message'
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <button
                    className='bg-red-500 w-full hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='button'>
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='m-8'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.330232545445!2d6.89884927644507!3d51.02852124557414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf31daa67febb9%3A0x9db8e696b10288e3!2sChorweiler%20Cricket%20Ground!5e0!3m2!1sen!2sde!4v1708553792652!5m2!1sen!2sde'
              width='600'
              height='450'
              style={{ border: '0' }}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'></iframe>{' '}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
