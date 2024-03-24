import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'

function Gallery() {
  return (
    <>
    <Navbar />
    <div className='p-5 md:p-10'>
       <div className='columns-1 gap-5  lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 md:[&>img:not(:first-child)]:mt-8'>
       <Image
            src='/jd-batting.jpeg'
            alt='Köln City Cricket Club e.V'
            width={750}
            height={200}
          />
          <Image
            src='/jd-vinay.jpeg'
            alt='Köln City Cricket Club e.V'
            width={500}
            height={200}
          />
          <Image
            src='/mafuz-batting.jpeg'
            alt='Köln City Cricket Club e.V'
            width={250}
            height={200}
          />
          <Image
            src='/jd-batting-training.jpeg'
            alt='Köln City Cricket Club e.V'
            width={250}
            height={200}
          />
          <Image
            src='/safi.jpeg'
            alt='Köln City Cricket Club e.V'
            width={250}
            height={200}
          />
          <Image
            src='/tejas.jpg'
            alt='Köln City Cricket Club e.V'
            width={250}
            height={200}
          />
          <Image
            src='/IMG_3298.jpg'
            alt='Köln City Cricket Club e.V'
            width={250}
            height={200}
          />
          <Image
            src='/wicketkeeping.jpeg'
            alt='Köln City Cricket Club e.V'
            width={250}
            height={200}
          />
          <Image
            src='/harsimrat.jpg'
            alt='Köln City Cricket Club e.V'
            width={250}
            height={200}
          />
          <Image
            src='/likhon.jpeg'
            alt='Köln City Cricket Club e.V'
            width={250}
            height={200}
          />
          <Image
            src='/sindhoor-batting.jpeg'
            alt='Köln City Cricket Club e.V'
            width={550}
            height={500}
          />

<Image
            src='/hasan.jpg'
            alt='Köln City Cricket Club e.V'
            width={250}
            height={200}
          />
       </div>
      
     </div>
    <Footer />
  </>  )
}

export default Gallery