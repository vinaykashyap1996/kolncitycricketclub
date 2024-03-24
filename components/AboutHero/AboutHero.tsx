import Image from 'next/image';
import React from 'react';

function AboutHero() {
  return (
    <div className='text-black h-1/2 w-full flex flex-row justify-around items-start p-20'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <Image
            src='/IMG_3298.jpg'
            alt='Köln City Cricket Club e.V'
            width={1000}
            height={600}
          />
        </div>
        <div className='ml-20 mt-20 text-lg text-bold'>
        More than just a cricket club, its a family we cherish and admire.
Welcoming each member with open arms, in unity we aspire.
Here, passion for the game blends with bonds that never tire.
Every victory shared, every challenge, a fire.
In this family, we grow, learn, and inspire.
Join us, feel the warmth, and let your spirits soar higher.
        </div>
    </div>
  );
}

export default AboutHero;
