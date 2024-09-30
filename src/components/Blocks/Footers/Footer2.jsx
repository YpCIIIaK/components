import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-[#8fd7cd] text-[#1D3461] p-8">
      <div className='h-[300px] border-2 border-[#1D3461] flex flex-col justify-between'>
        <div className='p-4'>
            <p className='text-[19px] font-bold'>Contact info</p>
            <div>
                <p>Phone KZ: +7 705-374-69-75</p>
                <p>Phone RU: +7 996-937-27-04</p>
                <p>Email: bigboyvova01@gmail.com</p>
                <p>Telegram: @bigboyvova</p>
            </div>
        </div>
          <div className='self-end p-4'>
            <p className='text-6xl font-extrabold'>Anywhere / Anytime</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
