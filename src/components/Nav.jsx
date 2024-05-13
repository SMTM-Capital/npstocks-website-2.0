import React from 'react';
import logo from '../assets/icons/logo.png';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <div className='flex justify-between items-center'>
      <img
        src={logo}
        alt="logo"
        className='w-15 h-14 sm:w-21  sm:h-20'
      />
      
      <div className='hidden sm:block ml-40'>
        <ul className='flex text-white gap-9'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='text-[16px] transition ease-in-out duration-700 hover:text-[#FEFB20] font-normal leading-4'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex gap-4'>
        <button className='px-5 py-[10px] transition ease-in-out duration-700 hover:text-[#FEFB20] hover:border-[#FEFB20] text-white text-[16px] font-medium leading-4 rounded-3xl border border-white'>Login to web</button>
        <button className='px-5 py-[10px] transition ease-in-out duration-700 bg-[#FEFB20] hover:shadow-lg hover:shadow-[#FEFB20]/20 text-black text-[16px] font-medium leading-4 rounded-3xl'>Get Started</button>
      </div>
    </div>
  )
}

export default Nav