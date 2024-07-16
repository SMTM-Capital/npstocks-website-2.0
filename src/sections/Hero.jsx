import React, { useState } from 'react';
import keyboard from '../assets/icons/keyboard.svg';
import mobile from '../assets/icons/mobile.svg';
import mobileYellow from '../assets/icons/mobile-yellow.svg'
import keyboardYellow from '../assets/icons/keyboard-yellow.svg'
import bar from '../assets/icons/bar.png';
import heroImage from '../assets/images/hero-image.png';
import { QrModel } from '../components';

const Hero = () => {
  const [openQrModel, setOpenQrModel] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const openQrModelFunc = () => {
    setOpenQrModel(prev => !prev);
  }

  return (
    <section className='relative max-container overflow-hidden h-[810px]'>
      <div className="flex flex-col items-center justify-center gap-9">
        <div className="flex flex-col pt-32 gap-4 items-center">
          <div className='flex flex-col items-center md:flex-row gap-3'>
            <p className='text-white text-[48px] sm:text-[64px] font-medium leading-[120%]'>Simple. </p>
            <p className='text-white text-[48px] sm:text-[64px] font-medium leading-[120%]'>Sophisticated.</p>
            <p className='text-white text-[48px] sm:text-[64px] font-medium leading-[120%]'>Complete.</p>
          </div>
          <p className="text-blue-500 text-2xl md:text-[32px] text-center font-normal leading-[38px]">360 coverage of Nepal Stock Exchange.</p>
        </div>

        <div className='flex flex-col items-center sm:flex-row gap-7'>
          <div
            className='border-gradient-1 transition ease-in-out duration-500 text-white hover:text-[#FEFB20]'
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <a target='_blank' href='https://app.npstocks.com' className='flex flex-row items-center gap-[10px] px-5 py-[10px] cursor-pointer'>
              <img src={isHovered2 ? keyboardYellow : keyboard} alt="keyboard" />
              <p className='text-[16px] font-medium'>Launch npstocks <span className='font-bold ml-1'>Web</span></p>
            </a>
          </div>

          <div
            className='border-gradient-1 transition ease-in-out duration-500 text-white hover:text-[#FEFB20]'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a
              onClick={openQrModelFunc}
              className='flex flex-row items-center gap-[10px] px-5 py-[10px] cursor-pointer'
            >
              <img src={isHovered ? mobileYellow : mobile} alt='mobile icon' />
              <p className='text-[16px] font-medium'>Download npstocks <span className='font-bold ml-1'>Mobile</span></p>
            </a>
          </div>
        </div>

        <div className='z-30'>
          <img src={heroImage} alt="npstocks dashboard in phone and laptop" />
        </div>
      </div>
      <div className='absolute right-10 -bottom-60 object-contain w-1/2 h-1/2 md:-right-60 md:-bottom-10 md:object-none'>
        <img src={bar} alt="bar" />
      </div>

      {openQrModel &&
        <div className="z-30 overflow-hidden fixed flex justify-center items-center left-0 top-0 w-[100%] h-[100%] bg-[#000000E5] ">
          <QrModel close={openQrModelFunc} />
        </div>
      }
    </section>
  )
}

export default Hero