import React from 'react';

const Tag = ({}) => {

    return (
        <div className='flex justify-center my-8 bg-sliderBgColor-500'>
            <div className='bg-red-500 w-28 text-white py-1 px-3 rounded-full text-center mx-2'>red tag</div>
            <div className='bg-amber-500 w-28 text-white py-1 px-3 rounded-full text-center mx-2'>amber tag</div>
            <div className='bg-violet-500 w-28 text-white py-1 px-3 rounded-full text-center mx-2'>violet tag</div>
            <div className='bg-pink-500 w-28 text-white py-1 px-3 rounded-full text-center mx-2'>pink tag</div>
            <div className='bg-blue-500 w-28 text-white py-1 px-3 rounded-full text-center mx-2'>blue tag</div>
            <div className='bg-emerald-500 w-28 text-white py-1 px-3 rounded-full text-center mx-2'>emerald tag</div>
            <div className='bg-zinc-500 w-28 text-white py-1 px-3 rounded-full text-center mx-2'>zinc tag</div>
        </div>
    );
};

export default Tag;