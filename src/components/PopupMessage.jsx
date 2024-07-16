import React, { useState, useEffect } from 'react';
import close from '../assets/icons/Close_round.svg';

const PopupMessage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = '';
  };

  return (
    showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="flex flex-col relative bg-white rounded-lg shadow-lg max-w-[967px] w-full h-[274px] p-[1px]">
          <div className='relative flex justify-start items-center pl-6 h-1/2 bg-[#0E0915] rounded-t-lg overflow-hidden'>
            <div className="popup-gradient" />
            <p className='text-white text-[24px] font-medium z-10'>This is a header</p>
          </div>

          <div className="flex justify-start items-center pl-6 h-1/2">
            <p className='text-black text-[16px] font-medium'>this is a body that explains whats happening</p>
          </div>

          <div className="absolute top-4 right-4 cursor-pointer bg-[#FEFB20] rounded-md" onClick={closePopup}>
            <img src={close} alt="close" />
          </div>
        </div>
      </div>
    )
  );
};

export default PopupMessage;
