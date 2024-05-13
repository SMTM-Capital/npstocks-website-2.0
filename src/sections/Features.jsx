import React from 'react';
import enjoy from '../assets/icons/enjoy.png';
import { featureList } from '../constants';
import lightning from '../assets/icons/lightning-3d.png';

const Features = () => {
  return (
    <section className='flex flex-col items-center gap-[54px] md:gap-48 pt-16 pb-[75px] px-2'>
      <div className='flex flex-col md:flex-row w-full justify-between items-center gap-4 md:px-40'>
        <img src={enjoy} alt="enjoy" />

        <div className="flex flex-col text-center md:text-end text-[#A5A5A5] text-[16px] md:text-2xl font-[275px] leading-6">
          <p>Powerful Comprehensive</p>
          <p>and intuitive Screen</p>
        </div>
      </div>
      <div className='relative flex flex-col items-center gap-[54px] md:gap-48 max-container'>
        <div className="grid grid-cols-2 grid-row-3 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-14">
          {featureList.map((item) => (
            <div className='flex flex-col justify-start items-center gap-[15px] border-gradient-2 w-[170px] h-[150px] md:w-[205px] md:h-[184px]'>
              <img src={item.icon} alt="icon" className='z-30 mt-6' />

              <p className='text-white text-center z-30 w-[163px] font-medium  text-sm md:text-lg leading-5'>{item.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-[19px] max-w-[893px] z-20">
          <p className='font-semibold text-center text-[24px] md:text-[48px] leading-[120%] text-white'>Pioneering platform that is powering investment industry in Nepal</p>
          <p className='text-[#FEBD4E] font-normal leading-[120%] text-sm md:text-2xl text-center'>Since 2016</p>
        </div>

        <div className="md:hidden absolute z-20 -top-20 -right-20 w-[200px] h-[200px] object-contain">
          <img src={lightning} alt="lightning" />
        </div>

        <div className='hidden md:block absolute -right-96 bottom-24 z-20'>
          <img src={lightning} alt="lightning" />
        </div>
      </div>
    </section>
  )
}

export default Features