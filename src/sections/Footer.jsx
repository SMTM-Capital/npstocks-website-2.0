import React from 'react';
import logo from '../assets/icons/logo.png';
import x from '../assets/icons/x.png';
import youtube from '../assets/icons/youtube.png';
import instagram from '../assets/icons/instagram.png';
import facebook from '../assets/icons/facebook.png';
import copyright from '../assets/icons/Copyright.svg';

const Footer = () => {
  return (
    <section id='contact-us' className='pt-[50px] pb-[43px] z-20'>
      <div className='flex flex-col gap-[108px]'>
        <div className='flex flex-col items-start gap-[63px] md:gap-0 md:flex-row md:items-center md:justify-between pl-8 md:pr-8'>
          <div className='flex flex-col md:flex-row gap-[20px] md:gap-[66px]'>
            <div className='w-[95px] h-[113px] object-contain'>
              <img src={logo} alt="logo" />
            </div>

            <div className="flex flex-col text-[#D6D6D6] text-base gap-2">
              <p>Sarathi Marg, Gyaneshwor, Kathmandu, Nepal</p>
              <p>+977 4540783</p>
              <p>npstocks@smtmcapital.com.np</p>
            </div>
          </div>

          <div className='flex flex-row gap-4'>
            <a href="https://www.instagram.com/smtmcapital/" target='_blank'>
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://www.facebook.com/SMTMCapital/" target='_blank'>
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://www.youtube.com/channel/UCe01SMBUAZQ1xWiYPvRshGQ" target='_blank'>
              <img src={youtube} alt="youtube" />
            </a>
            <a href="https://twitter.com/SMTMCapital" target='_blank'>
              <img src={x} alt="x" />
            </a>
          </div>
        </div>

        <div className='flex flex-row justify-left md:justify-center ml-8 md:ml-0 w-full gap-2'>
          <img src={copyright} alt="copyright" />
          <p className='text-[#FEFBFBB2] font-medium text-[20px] leading-7'>2024 S.M.T.M. Capital Pvt. Ltd.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer