import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <article className='bg-slate-200 pt-20 overflow-hidden'>
      <div className='bg-slate-200'>
        <div className='relative card'>
          {/* Image */}
          <img
            className='w-full h-auto bg-no-repeat bg-center bg-cover'
            src={`${process.env.PUBLIC_URL}/img/home.jpg`}
            alt='Home'
          />

          {/* Overlay */}
          <div className='absolute inset-0 bg-black bg-opacity-40'></div>

          {/* welcome text */}
          <div className='absolute inset-0 items-start pt-20 lg:pt-60 pl-12 sm:pl-20 justify-center'>
            <h1 className='text-xl sm:text-4xl lg:text-8xl font-bold text-white font-libre'>
              Welcome
              <br />
              to your Smart Home
              <br />
              Control Center
            </h1>
          </div>
        </div>

        <div className='font-bold text-xl sm:text-2xl p-4 sm:px-8 lg:text-4xl flex justify-center'>
          <h2 className='font-shippori font-bold text-pink-700'>
            Your Connected Home Sensors
          </h2>
        </div>
        <div className='mx-4 sm:mx-8 lg:mx-16 my-4 grid grid-cols-2 lg:grid-cols-3 place-items-center gap-6 font-space'>
          {/* sensor 1 */}
          <div className='card hover:shadow-lg w-full h-64 lg:w-3/4 opacity-100 bg-slate-950 shadow-md overflow-hidden'>
            <img
              className='w-full h-40 sm:h-64 lg:h-72 object-cover'
              src={`${process.env.PUBLIC_URL}/img/Awair.jpg`}
              alt='Card'
            />
            <div className='m-4 p-2'>
              <span className='font-bold text-pink-700 text-2xl'>
                <Link to='/awair' className='text-black-500 hover:underline'>
                  Awair Element
                </Link>
              </span>
            </div>
          </div>
          {/* sensor 2 */}
          <div className='card hover:shadow-lg w-full h-64 lg:w-3/4 opacity-100 bg-slate-950 shadow-md overflow-hidden'>
            <img
              className='w-full h-40 sm:h-64 lg:h-72 object-cover'
              src={`${process.env.PUBLIC_URL}/img/Sensedge.jpg`}
              alt='Card'
            />
            <div className='m-4 p-2'>
              <span className='font-bold text-pink-700 text-2xl'>
                <Link to='/sensedge' className='text-black-500 hover:underline'>
                  Senesedge Mini
                </Link>
              </span>
            </div>
          </div>
          {/* sensor 3 */}
          <div className='card hover:shadow-lg w-full h-64 lg:w-3/4 opacity-100 bg-slate-950 shadow-md overflow-hidden'>
            <img
              className='w-full h-40 sm:h-64 lg:h-72 object-cover'
              src={`${process.env.PUBLIC_URL}/img/Aqara.png`}
              alt='Card'
            />
            <div className='m-4 p-2'>
              <span className='font-bold text-pink-700 text-2xl'>
                <Link to='/aqara' className='text-black-500 hover:underline'>
                  Aqara Thermostat
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;
