import React from 'react'
import nepseLogo from '../assets/icons/NEPSE-logo.png';
import tradingViewLogo from '../assets/icons/trading-view-logo.png';

const Partners = () => {
  return (
    <section className="flex flex-col items-center justify-start gap-[30px] mx-[50px]">
      <p className='text-blue-500 text-xl font-bold'>Official Partners</p>

      <div className="flex flex-col md:flex-row w-full justify-between">
        <div className="flex flex-row justify-start items-center gap-[14px]">
          <img src={nepseLogo} alt="nepse logo" />
          <p className='text-black text-base font-semibold w-[385px]'>npstocks is a Licensed Data vendor of  Nepal Stock Exchange (NEPSE)</p>
        </div>

        <div className="flex flex-row justify-start items-center gap-[14px]">
          <img src={tradingViewLogo} alt="trading view logo" />
          <p className='text-black text-base font-semibold w-[385px]'>npstocks has partnered with Trading view for its charting technology.</p>
        </div>
      </div>
    </section>
  )
}

export default Partners