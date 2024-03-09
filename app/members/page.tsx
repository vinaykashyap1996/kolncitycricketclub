import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import Image from 'next/image';

function Members() {
  return (
    <>
      <Navbar />
      <div className=' bg-black h-full text-white text-center'>
        <h1 className='text-white text-transform: uppercase text-6xl mb-4'>
          MEET OUR MANAGEMENT
        </h1>
          <div className='mx-px	my-px flex flex-row justify-between	'>
          <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <Image
              src='/thumbnail.webp'
              alt='Köln City Cricket Club e.V'
              width={400}
              height={400}
            />
            <div className='px-6 py-4 bg-gray-300'>
              <div className='font-bold text-xl'>Rameez Deshmukh</div>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <Image
              src='/thumbnail.webp'
              alt='Köln City Cricket Club e.V'
              width={400}
              height={400}
            />
            <div className='px-6 py-4 bg-gray-300'>
              <div className='font-bold text-xl'>Vinay Kashyap</div>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <Image
              src='/JD-Singh.jpeg'
              alt='Köln City Cricket Club e.V'
              width={400}
              height={400}
            />
            <div className='px-6 py-4 bg-gray-300'>
              <div className='font-bold text-xl'>Jagandeep Singh</div>
          </div>
        </div>
          </div>
          <div className='mt-4 flex flex-row justify-between	'>
          <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <Image
              src='/thumbnail.webp'
              alt='Köln City Cricket Club e.V'
              width={400}
              height={400}
            />
            <div className='px-6 py-4 bg-gray-300'>
              <div className='font-bold text-xl'>Tejas Naik</div>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <Image
              src='/thumbnail.webp'
              alt='Köln City Cricket Club e.V'
              width={400}
              height={400}
            />
            <div className='px-6 py-4 bg-gray-300'>
              <div className='font-bold text-xl'>Sindhoor Hegde</div>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <Image
              src='/likhon.jpeg'
              alt='Köln City Cricket Club e.V'
              width={400}
              height={400}
            />
            <div className='px-6 py-4 bg-gray-300'>
              <div className='font-bold text-xl'>Ahmed Likhon</div>
          </div>
        </div>
          </div>
      </div>
      <Footer />
    </>
  );
}

export default Members;
