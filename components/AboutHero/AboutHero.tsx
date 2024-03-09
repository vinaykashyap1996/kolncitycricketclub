import Image from 'next/image';
import React from 'react';

function AboutHero() {
  return (
    <div className='bg-black text-white h-1/2 w-full flex flex-row justify-around items-start p-20'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <Image
            src='/slider.jpeg'
            alt='Köln City Cricket Club e.V'
            width={200}
            height={100}
          />
        </div>
        <div>
        MORE THAN JUST A CRICKET CLUB. ITS A FAMILY!
        The clubs welcomes you with warm heart to join the family.

        Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.
        </div>
    </div>
  );
}

export default AboutHero;
