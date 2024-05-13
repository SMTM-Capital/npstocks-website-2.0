import React from 'react';
import check from '../assets/icons/check.png';
import googlePlay from '../assets/icons/google-play.png';
import apple from '../assets/icons/apple.png';

const Card = ({
  title,
  points,
  download
}) => {
  return (
    <div className='max-w-[856px] min-h-[430px] flex flex-col justify-start rounded-[32px] px-[26px] md:pr-9 md:pl-20 pt-9 pb-11 shadow-xl'>
      <p className='sub-title md:w-[662px] mb-[34px]'>{title}</p>

      <div className="flex flex-col gap-[14px] mb-14">
        {points.map((point) => (
          <p className='flex flex-row items-center gap-[15px] description'>
            <img src={check} alt="check" />
            {point}
          </p>
        ))}
      </div>

      {download &&
        <div className="flex flex-row items-center justify-between">
          <p className='text-[#393737] font-semibold font-sm leading-normal'>now available for download on</p>

          <div className='flex flex-row gap-5'>
            <a href="https://play.google.com/store/apps/details?id=np.com.smtmcapital.npstocks&hl=en&gl=US" target='_blank' className='object-contain w-[42px] h-[42px]'>
              <img src={googlePlay} alt="google"  />
            </a>

            <a href="" className='object-contain w-[42px] h-[42px]'>
              <img src={apple} alt="apple" />
            </a>
          </div>
        </div>}
    </div>
  )
}

export default Card