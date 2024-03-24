'use client';

import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

function Navbar() {
  return (
    <Popover className='container mx-auto flex items-center border-b-2 px-6 py-2 h-24'>
    <a href='/'>
    <Image 
      src='/logo-without-bg.png'
      alt='Köln City Cricket Club e.V'
      width={80}
      height={90}
    />
    </a>
    <h1 className='font-bold'>Köln City Cricket Club</h1>
    <div className='grow'>
      <div className=' hidden sm:flex items-center justify-end gap-2 md:gap-8'>
        <Link className='text-transform: uppercase' href='/about'>
          About Us
        </Link>
        <Link className='text-transform: uppercase' href='/members'>
          Members
        </Link>
        <Link className='text-transform: uppercase' href='/team'>
          Team
        </Link>
        <Link className='text-transform: uppercase' href='/gallery'>
          Gallery
        </Link>
        <Link className='text-transform: uppercase' href='/honours'>
          HONOUR BOARD
        </Link>
        <Link className='text-transform: uppercase' href='/contact'>
          Contact
        </Link>
      </div>
    </div>
    <div className='flex grow items-center justify-end sm:hidden'>
      <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
        <span className='sr-only'>Open menu</span>
        <Bars3Icon className='h-6 w-6' aria-hidden='true' />
      </Popover.Button>
    </div>
    <Transition

      enter='duration-200 ease-out'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='duration-100 ease-in'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'>
      <Popover.Panel
        focus
        className='absolute insert-x-0 top-0 origin-top-right transform p-2 md:hidden'>
        <div className='rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50'>
          <div className='pt-5 pb-6 px-5'>
            <div className='flex items-center justify-between'>
              <h1 className='font-bold'>
                Hello This is my first Next JS Project
              </h1>
              <div className='-mr-2'>
                <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-y-8'>
                  <Link
                    className='text-transform: uppercase focus:outline-none focus:ring-2 focus:ring-insert focus:ring-gray-500 px-2'
                    href='/about'>
                    About Us
                  </Link>
                  <Link
                    className='text-transform: uppercase focus:outline-none focus:ring-2 focus:ring-insert focus:ring-gray-500 px-2'
                    href='/members'>
                    Members
                  </Link>
                  <Link
                    className='text-transform: uppercase focus:outline-none focus:ring-2 focus:ring-insert focus:ring-gray-500 px-2'
                    href='/team'>
                    Team
                  </Link>
                  <Link
                    className='text-transform: uppercase focus:outline-none focus:ring-2 focus:ring-insert focus:ring-gray-500 px-2'
                    href='/gallery'>
                    Gallery
                  </Link>
                  <Link
                    className='text-transform: uppercase focus:outline-none focus:ring-2 focus:ring-insert focus:ring-gray-500 px-2'
                    href='/honours'>
                    HONOUR BOARD
                  </Link>
                  <Link
                    className='text-transform: uppercase focus:outline-none focus:ring-2 focus:ring-insert focus:ring-gray-500 px-2'
                    href='/contact'>
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>  )
}

export default Navbar