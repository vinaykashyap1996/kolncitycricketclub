import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

function Honours() {
  return (
    <>
      <Navbar />
      <div className='bg-black h-full text-white text-center'>
        {/* <h1 className='text-white text-transform: uppercase text-6xl mb-4'>
          HONOURS BOARD
        </h1> */}
        <h3 className='text-white text-transform: uppercase text-3xl mb-4'> Batting Honours</h3>
        <div className='flex justify-center'>
        <table className="md:table-fixed">
          <thead>
            <tr>
              <th  className='px-4 py-2'>Name</th>
              <th className='px-4 py-2'>Oppostion Team</th>
              <th className='px-4 py-2'>Best Figures</th>
              <th className='px-4 py-2'>Year</th>
              <th className='px-4 py-2'>Tournament</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <h3 className='text-white text-transform: uppercase text-3xl mb-4'> Bowling Honours</h3>
        <div className='flex justify-center'>
        <table className="md:table-fixed">
          <thead>
            <tr>
              <th  className='px-4 py-2'>Name</th>
              <th className='px-4 py-2'>Oppostion Team</th>
              <th className='px-4 py-2'>Best Figures</th>
              <th className='px-4 py-2'>Year</th>
              <th className='px-4 py-2'>Tournament</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr> */}
          </tbody>
        </table>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Honours;
