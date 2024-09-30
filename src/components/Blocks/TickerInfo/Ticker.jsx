import React from 'react';
import InfoBlock from './InfoBlock';
import Overview from './Overview';
import Statistics from './Statistics';

const Ticker = () =>{
    return(
        <div className='min-h-screen flex flex-col items-center justify-center bg-sliderBgColor-500 p-10'>
            <InfoBlock />
            <Overview />
            <Statistics />
        </div>
    );
}

export default Ticker;