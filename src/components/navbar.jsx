import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#17fff3] cursor-pointer'><Link to='home' smooth={true} duration={500}>THE MATCHMAKERS.</Link></h1>
      <ul className='hidden md:flex'>
          <li className='p-7 cursor-pointer'><Link to='home' smooth={true} duration={500}>Home</Link></li>
          <li className='p-7 cursor-pointer'><Link to='profile' smooth={true} duration={500}>Profile</Link></li>
          <li className='p-7 cursor-pointer'><Link to='tools' smooth={true} duration={500}>Tools</Link></li>
          <li className='p-7 cursor-pointer'><Link to='about' smooth={true} duration={500}>About</Link></li>
          <li className='p-7 cursor-pointer'><Link to='skills' smooth={true} duration={500}>Skills&Jobs</Link></li>
          <li className='p-7 cursor-pointer'><Link to='outcome' smooth={true} duration={500}>Outcome</Link></li>
          <li className='p-7 cursor-pointer'><Link to='reflect' smooth={true} duration={500}>Reflection</Link></li>
      </ul>
      
      <div onClick={handleNav} className='md:hidden z-10'>
      </div>

      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#17fff3] m-4'><Link to='home' smooth={true} duration={500}>THE MATCHMAKERS.</Link></h1>
          <li className='p-4 border-b border-gray-600 cursor-pointer'><Link to='home' smooth={true} duration={500}>Home</Link></li>
          <li className='p-4 border-b border-gray-600 cursor-pointer'><Link to='profile' smooth={true} duration={500}>Team Profile</Link></li>
          <li className='p-4 border-b border-gray-600 cursor-pointer'><Link to='tools' smooth={true} duration={500}>Tools</Link></li>
          <li className='p-4 border-b border-gray-600 cursor-pointer'><Link to='about' smooth={true} duration={500}>About Project</Link></li>
          <li className='p-4 border-b border-gray-600 cursor-pointer'><Link to='skills' smooth={true} duration={500}>Skills & Jobs</Link></li>
          <li className='p-4 border-b border-gray-600 cursor-pointer'><Link to='outcome' smooth={true} duration={500}>Project Outcome</Link></li>
          <li className='p-4'><Link to='reflect' smooth={true} duration={500}>Reflection</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;