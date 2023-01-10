import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#17fff3] cursor-pointer'>BEAT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-7 hover:scale-100 duration-500 cursor-pointer'>Home</li>
        <li className='p-7 hover:scale-100 duration-500 cursor-pointer'>Profile</li>
        <li className='p-7 hover:scale-100 duration-500 cursor-pointer'>Tools</li>
        <li className='p-7 hover:scale-100 duration-500 cursor-pointer'>About</li>
        <li className='p-7 hover:scale-100 duration-500 cursor-pointer'>Skills&Jobs</li>
        <li className='p-7 hover:scale-100 duration-500 cursor-pointer'>Outcome</li>
        <li className='p-7 hover:scale-100 duration-500 cursor-pointer'>Reflection</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#17fff3] m-4'>BEAT.</h1>
          <li className='p-4 border-b border-gray-600 cursor-pointer'>Home</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer'>Team Profile</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer'>Tools</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer'>About Project</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer'>Skills & Jobs</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer'>Project Outcome</li>
          <li className='p-4'>Reflection</li>
      </ul>
    </div>
  );
};

export default Navbar;