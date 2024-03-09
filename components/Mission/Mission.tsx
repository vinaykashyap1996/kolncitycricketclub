import React from 'react';

function Mission() {
  return (
    <div className='bg-black text-white h-1/2 w-full flex flex-col justify-around p-20'>
      <div className='p-5'>
        <p className='text-white-800 text-center font-bold text-3xl pb-6'>
          VISION OF KÖLN CITY CRICKET CLUB
        </p>
      </div>
      <div className='flex flex-row justify-between'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 text-transform: uppercase'>Promote Better Cricket</div>
            <p className='text-white-700 text-base'>
              To support the Deutscher Cricket Bund (DCB) and West Deutcher Cricket Bund (WDCB) in the improvement of cricket at grass root and at National level.
            </p>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 text-transform: uppercase'>Facilities and Infrastructure</div>
            <p className='text-white-700 text-base'>
            Continuously invest in and improve facilities, creating a state-of-the-art cricketing environment that supports player development and attracts top talent.
            </p>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 text-transform: uppercase'>Promote Sponsors</div>
            <p className='text-white-700 text-base'>
            Actively promote sponsors products and services through social media, newsletters, and other communication channels.
            Express gratitude and appreciation for sponsors through dedicated events, recognition ceremonies, and collaborative initiatives.
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>EQUAL OPPERTUNITY</div>
            <p className='text-white-700 text-base'>
            To provide an equal opportunity and better cricketing experience for players in NRW region
            </p>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>PLAYER DEVELOPMENT</div>
            <p className='text-white-700 text-base'>
            Strive to cultivate a nurturing environment that fosters the holistic development of players, focusing on skill enhancement, character building, and fostering a love for the game
            </p>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>SPORTSMENSHIP</div>
            <p className='text-white-700 text-base'>
            Engage in community outreach programs that promote the values of sportsmanship and fair play among young aspiring cricketers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
