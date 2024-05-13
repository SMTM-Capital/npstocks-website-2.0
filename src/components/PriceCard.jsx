import React from 'react';
import discount from '../assets/icons/discount.png';

const PriceCard = ({
  price,
  popular,
  time,
  offer,
  discountPrice,
  discountPct,
  offerTitle
}) => {
  return (
    <>
      {!offer ?
        <div className='relative flex flex-col items-center w-[324px] h-[250px] bg-[#F2F2F2] rounded-[32px] shadow-xl pt-[30px] px-[15px] gap-2'>
          <div className='flex flex-row w-[293px] h-[84px] justify-center items-baseline bg-white rounded-2xl gap-2'>
            <p className='text-[20px] titillium-web'>Rs.</p>
            <p className='text-[48px] font-semibold titillium-web'>{price}</p>
          </div>
          <p className='text-[#707070] text-sm leading-4'>for</p>
          <p className='bg-[#FEFB20] rounded-[32px] text-black px-5 py-[10px] font-medium text-[20px] leading-4'>{time}</p>

          {popular &&
            <p className='absolute -top-5 right-5 text-white bg-[#4D74FE] rounded-[32px] px-5 py-[10px] text-[20px] leading-4'>
              Most Popular
            </p>
          }
        </div> :
        <div className='relative flex flex-col items-center w-[324px] h-[250px] bg-[#F2F2F2] rounded-[32px] shadow-xl pt-[30px] px-[15px] gap-2'>
          <p className='text-[#5843F8] text-[24px] leading-4 font-semibold mb-[19px]'>{offerTitle}</p>

          <div className='relative flex flex-col justify-end items-center w-[293px] h-[123px] bg-white rounded-2xl pb-2 mb-[14px]'>

            <div className='absolute top-2 left-2 flex flex-row items-center text-left line-through text-[#878787] titillium-web'>
              <p className='text-sm'>Rs.</p>
              <p className='text-[20px] font-semibold'>{price}</p>
            </div>

            <div className='flex flex-row items-baseline gap-2'>
              <p className='text-[20px] titillium-web'>Rs.</p>
              <p className='text-[48px] font-semibold titillium-web'>{discountPrice}</p>
            </div>

            <p className='bg-[#FEFB20] p-[10px] rounded-[32px] text-black text-sm font-medium leading-4'>Save {discountPct}</p>
          </div>

          <div className='flex flex-row gap-6'>
            <p className='text-[#707070] text-sm leading-4'>for</p>
            <p className='text-black font-medium text-[20px] leading-4'>{time}</p>
          </div>

          <div className="absolute -top-[72px] -right-8">
            <img src={discount} alt="discount" />
          </div>
        </div>
      }
    </>
  )
}

export default PriceCard