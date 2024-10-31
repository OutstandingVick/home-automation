import React from 'react';

const Navbar = () => {
  return (
    <div className='overflow-hidden'>
      <nav className='fixed top-0 left-0 w-full h-24 flex justify-between items-center p-4 bg-white text-black font-crimson-text font-bold z-50 shadow-md'>
        <div className='flex'>
          <img
            className='w-12 h-12'
            src={`${process.env.PUBLIC_URL}/img/piphinet.jpg`}
            alt='shut'
          />
          <a href='/' className='no-underline p-2 text-xl'>
            PiPhi Network
          </a>
        </div>

        <div className='hidden md:flex space-x-8 font-libre'>
          <a href='/' className='no-underline'>
            Home
          </a>
          <a href='/entry' className='no-underline'>
            The Network
          </a>
          <a href='/about' className='no-underline'>
            Docs
          </a>
          <a href='/contact' className='no-underline'>
            Terms
          </a>
          <a href='/faqs' className='no-underline'>
            Pricing
          </a>
        </div>
      </nav>

      {/* Footer navigation, only visible on mobile */}
    </div>
  );
};

export default Navbar;
