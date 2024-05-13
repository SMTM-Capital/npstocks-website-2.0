import React from 'react';
import closeIcon from '../assets/icons/close.png';
import gradient from '../assets/icons/gradient.svg';
import appstore from '../assets/icons/appstore.png';
import playstore from '../assets/icons/playstore.png';

const QrModel = ({ close }) => {
  return (
    <div className='relative flex flex-col items-center w-[370px] md:w-[540px] h-[648px] px-4 bg-white rounded-[32px]'>
      <div className='relative h-[193px] w-[372px] md:w-[540px] bg-[#0E0915] rounded-t-[26px] overflow-hidden'>
        <img src={closeIcon} alt="close" onClick={close} className='absolute top-4 right-4' />
        <img src={gradient} alt="gradient" />
      </div>

      <div className="absolute w-[210px] h-[200px] md:w-[280px] md:h-[274px] top-20 bg-white rounded-3xl shadow-xl object-contain"></div>

      <div className='flex flex-col text-[24px] font-medium leading-8 pt-48 pb-20 justify-center items-center w-[322px] md:w-[480px] text-[#0A0A0ACC] border-b border-b-black border-dashed'>
        <p>Scan the QR Code to</p>
        <p>download npstocks app</p>
      </div>

      <div className="flex flex-row w-[322px] md:w-[480px] pt-8 md:p-8 justify-between">
        <a href="https://play.google.com/store/apps/details?id=np.com.smtmcapital.npstocks&hl=en&gl=US" target='_blank'>
          <img src={playstore} alt="appstore" />
        </a>
        <img src={appstore} alt="appstore" />
      </div>
    </div>
  )
}

export default QrModel;