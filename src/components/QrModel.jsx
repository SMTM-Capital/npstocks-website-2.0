import React from 'react';
import closeIcon from '../assets/icons/close.png';
import gradient from '../assets/icons/gradient.svg';
import appstore from '../assets/icons/appstore.png';
import playstore from '../assets/icons/playstore.png';
import playstoreQr from '../assets/images/playstore-qr.png';
import appstoreQr from '../assets/images/appstore-qr.png';

const QrModel = ({ close }) => {
  return (
    <div className='relative flex flex-col items-center w-[387px] md:w-[685px] h-[822px] md:h-[557px] px-4 bg-white rounded-[32px]'>
      <div className='relative h-[193px] w-[387px] md:w-[685px] bg-[#0E0915] rounded-t-[26px] overflow-hidden'>
        <img src={closeIcon} alt="close" onClick={close} className='absolute top-4 right-4 cursor-pointer' />
        <img src={gradient} alt="gradient" className='w-full h-full object-cover' />
      </div>
      <div className='absolute top-[60px] md:top-[37px] flex flex-col text-white opacity-80 text-xl md:text-[28px] font-medium justify-center items-center'>
        <p>Scan the QR Code to</p>
        <p>download npstocks app</p>
      </div>
      
      <div className="absolute top-[210px] md:top-[140px] flex flex-col md:flex-row gap-[46px] flex-wrap justify-center">
        <div className="flex flex-col items-center justify-center gap-[18px]">
          <div className="w-[210px] h-[210px] md:w-[240px] md:h-[240px] p-4 bg-white rounded-3xl shadow-xl flex items-center justify-center">
            <img src={playstoreQr} alt="playstore qr" className="w-full h-full object-contain" />
          </div>
          <a href="https://play.google.com/store/apps/details?id=np.com.smtmcapital.npstocks" target='_blank' rel="noopener noreferrer">
            <img src={playstore} alt="playstore" className="h-10" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-[18px]">
          <div className="w-[210px] h-[210px] md:w-[240px] md:h-[240px] p-4 bg-white rounded-3xl shadow-xl flex items-center justify-center">
            <img src={appstoreQr} alt="appstore qr" className="w-full h-full object-contain" />
          </div>
          <a href="https://apps.apple.com/app/npstocks-your-nepse-assistant/id6475991618" target='_blank' rel="noopener noreferrer">
            <img src={appstore} alt="appstore" className="h-10" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default QrModel;