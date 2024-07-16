import React from 'react';
import { experienceText } from '../constants';
import mobilePhone from '../assets/images/mobile-phone.png';
import laptop from '../assets/images/laptop.png';
import npstocks from '../assets/icons/npstocks.svg';
import { Card } from '../components';

const Experience = () => {
  return (
    <section id='platforms' className='relative max-container pt-14 md:pb-[145px]'>
      <div className='flex flex-col items-center justify-center mx-6'>
        <h2 className='title mb-16'>{experienceText.heading}</h2>

        <div className='flex flex-col md:flex-row items-center justify-center mb-[71px] gap-8'>
          <div className='flex flex-col items-end'>
            <div className='flex md:hidden gap-3 mr-4'>
              <img src={npstocks} alt="npstocks" className='object-contain' />
              <p className='text-sm px-5 py-[10px] font-semibold text-white bg-[#4D74FE] rounded-[32px]'>web</p>
            </div>
            <img src={mobilePhone} alt="npstocks app with stock live and company status" />
          </div>

          <div className='flex flex-col items-start mx-[17px]'>
            <div className='md:flex gap-3 hidden'>
              <img src={npstocks} alt="npstocks logo" className='object-contain' />
              <p className='text-sm px-5 py-[10px] font-semibold text-white bg-[#4D74FE] rounded-[32px]'>mobile</p>
            </div>

            <Card
              title={experienceText.card1.title}
              points={experienceText.card1.points}
              download={true}
            />
          </div>
        </div>

        <div className='flex flex-col-reverse w-full md:flex-row items-center justify-start gap-8'>
          <div className="flex flex-col items-end mx-[17px]">
            <div className='md:flex hidden gap-3'>
              <img src={npstocks} alt="npstocks icon" className='object-contain' />
              <p className='text-sm px-5 py-[10px] font-semibold text-white bg-[#4D74FE] rounded-[32px]'>web</p>
            </div>

            <Card
              title={experienceText.card2.title}
              points={experienceText.card2.points}
              download={false}
            />
          </div>

          <div className='flex flex-col md:hidden'>
            <div className='flex md:hidden gap-3 ml-4'>
              <img src={npstocks} alt="npstocks" className='object-contain' />
              <p className='text-sm px-5 py-[10px] font-semibold text-white bg-[#4D74FE] rounded-[32px]'>web</p>
            </div>
            <img src={laptop} alt="npstocks trading view chart" />
          </div>
        </div>
      </div>

      <div className='hidden md:block absolute z-10 -bottom-5 right-12'>
        <img src={laptop} alt="npstocks trading view chart" />
      </div>
    </section>
  )
}

export default Experience