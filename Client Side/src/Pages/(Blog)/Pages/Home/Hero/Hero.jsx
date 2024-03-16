import React from 'react';
import Cardhero from './Cardhero';
import HeroImg from './heroAsets/heroImgPlastine.jpg'

const Hero = () => {
    return (
        <div className='w-full ' >

            <div className='max-lg:my-36 max-sm:my-0'><img className='mx-auto rounded-md w-full' src={HeroImg} alt="" /></div>
            <Cardhero />




        </div>
    )
}

export default Hero