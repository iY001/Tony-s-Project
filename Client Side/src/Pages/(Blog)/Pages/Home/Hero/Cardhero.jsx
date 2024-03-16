import React from 'react';
import avatarImg from './heroAsets/avatarCard.png';

const Cardhero = () => {
    return (
        <div className="card  dark:bg-white top-1/2 2xl:top-[550px] md:top-[300px] max-sm:w-4/5 max-sm:mx-auto max-sm:mt-7 max-sm:shadow-lg md:left-[70px] md:gap-3 max-sm:gap-1 md:p-4 lg:top-[370px] 2xl:left-[280px] lg:left-[210px] lg:gap-3 lg:p-5 rounded-lg p-10 max-sm:p-4 box-content shadow-md max-sm:static absolute flex flex-col gap-7">
            <button className='dark:bg-[#4B6BFB] rounded-md lg:w-1/3 md:w-2/5 max-sm:w-3/5  py-2 max-sm:py-1 px-4 dark:text-white capitalize text-xl'>technology</button>
            <p className='font-bold lg:text-3xl 2xl:text-5xl max-sm:text-2xl md:text-2xl lg:leading-10 2xl:leading-tight'>The Impact of Technology on <br className='max-sm:hidden' />the Workplace: How<br /> Technology is Changing</p>

            <div className="avatar flex gap-5 ">
                <img src={avatarImg} alt="Avatar" />
                <p>Jason Francisco</p>
                <p>August 20, 2022</p>
            </div>
        </div>
    )
}

export default Cardhero