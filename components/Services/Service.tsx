import React from 'react';
import Image from 'next/image';

const Service = () => {
  return (
    <div className='bg-black-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
      <div className='p-5'>
        <p className='text-white-800 font-bold text-3xl pb-6'>
          MEET OUR PARTNERS
        </p>
        <div>
        <Image
            src='/rd_travels.PNG'
            alt='Köln City Cricket Club e.V'
            width={300}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
