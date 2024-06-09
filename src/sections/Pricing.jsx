import React from 'react';
import { PriceCard } from '../components';
import { pricings } from '../constants';
import arrow from '../assets/icons/arrow-right.svg';

const Pricing = () => {
  return (
    <section id='pricing' className='max-container pt-12 pb-[160px]'>
      <div className='flex flex-col items-center gap-[81px]'>
        <div className='flex flex-col items-center gap-4'>
          <p className='title max-w-[400px] text-wrap'>Pick a plan that's right for you</p>
          <p className='-rotate-[4.5deg] text-black bg-[#E1E1E1] text-center rounded-[60px] px-[24px] py-[16px] text-[14px] md:text-[24px] font-medium w-[296px] md:w-auto'>all plans start with a free 5 day trial</p>
        </div>

        <div className='flex flex-col md:flex-row gap-[39px]'>
          {pricings.map((item) => (
            <PriceCard
              price={item.price}
              time={item.time}
              popular={item.popular}
              offer={item.offer}
              discountPct={item.discountPct}
              discountPrice={item.discountPrice}
              offerTitle={item.offerTitle}
            />
          ))
          }
        </div>

        <a target='_blank' href='https://app.npstocks.com/register/' className='flex flex-row gap-6 items-center rounded-[60px] px-[64px] py-[24px] transition ease-in-out duration-700 hover:shadow-lg hover:shadow-[#5843F8]/70 bg-[#5843F8] text-white text-[16px] md:text-[24px] font-semibold'>
          <p>Start your free trial </p>

          <img src={arrow} alt="arrow" />
        </a>
      </div>
    </section>
  )
}

export default Pricing