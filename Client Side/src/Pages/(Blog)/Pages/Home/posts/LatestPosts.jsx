import React, { useState } from 'react';
import avatarImg from '../Hero/heroAsets/avatarCard.png';
import imgPost from '../Hero/heroAsets/heroImgPlastine.jpg'

const LatestPosts = () => {

    return (
        <div className='max-sm:my-10 xl:my-36 '>
            <h2 className='max-sm:w-11/12 xl:text-3xl mx-auto font-bold'>Latest Post</h2>
            <div className="container flex gap-5 max-lg:flex-wrap">

                <div className="card my-10 max-sm:w-10/12    max-lg:mx-auto xl:w-1/3 md:w-1/2 dark:bg-white border-solid border-gray-100 border-2  lg:gap-3 lg:p-5 rounded-lg p-10 max-sm:p-4 box-content shadow-md  flex flex-col gap-7">
                    <img src={imgPost} className='object-cover' alt="" />
                    <button className='dark:bg-[#4B6BFB] dark:bg-opacity-5 rounded-md w-1/2  max-sm:py-1 px-4 dark:text-[#4B6BFB] font-bold capitalize text-xl'>technology</button>
                    <p className='font-bold text-2xl max-sm:text-2xl md:text-2xl lg:leading-tight'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                    <div className="avatar  flex gap-5 text-[#97989F]">
                        <img src={avatarImg} className='w-1/12' alt="Avatar" />
                        <p>Jason Francisco</p>
                        <p>August 20, 2022</p>
                    </div>
                </div>
                

                <div className="card my-10 max-sm:w-10/12    max-lg:mx-auto xl:w-1/3 md:w-1/2 dark:bg-white border-solid border-gray-100 border-2  lg:gap-3 lg:p-5 rounded-lg p-10 max-sm:p-4 box-content shadow-md  flex flex-col gap-7">
                    <img src={imgPost} className='object-cover' alt="" />
                    <button className='dark:bg-[#4B6BFB] dark:bg-opacity-5 rounded-md w-1/2  max-sm:py-1 px-4 dark:text-[#4B6BFB] font-bold capitalize text-xl'>technology</button>
                    <p className='font-bold text-2xl max-sm:text-2xl md:text-2xl lg:leading-tight'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                    <div className="avatar  flex gap-5 text-[#97989F]">
                        <img src={avatarImg} className='w-1/12' alt="Avatar" />
                        <p>Jason Francisco</p>
                        <p>August 20, 2022</p>
                    </div>
                </div>
                

                <div className="card my-10 max-sm:w-10/12    max-lg:mx-auto xl:w-1/3 md:w-1/2 dark:bg-white border-solid border-gray-100 border-2  lg:gap-3 lg:p-5 rounded-lg p-10 max-sm:p-4 box-content shadow-md  flex flex-col gap-7">
                    <img src={imgPost} className='object-cover' alt="" />
                    <button className='dark:bg-[#4B6BFB] dark:bg-opacity-5 rounded-md w-1/2  max-sm:py-1 px-4 dark:text-[#4B6BFB] font-bold capitalize text-xl'>technology</button>
                    <p className='font-bold text-2xl max-sm:text-2xl md:text-2xl lg:leading-tight'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                    <div className="avatar  flex gap-5 text-[#97989F]">
                        <img src={avatarImg} className='w-1/12' alt="Avatar" />
                        <p>Jason Francisco</p>
                        <p>August 20, 2022</p>
                    </div>
                </div>
                

                <div className="card my-10 max-sm:w-10/12    max-lg:mx-auto xl:w-1/3 md:w-1/2 dark:bg-white border-solid border-gray-100 border-2  lg:gap-3 lg:p-5 rounded-lg p-10 max-sm:p-4 box-content shadow-md  flex flex-col gap-7">
                    <img src={imgPost} className='object-cover' alt="" />
                    <button className='dark:bg-[#4B6BFB] dark:bg-opacity-5 rounded-md w-1/2  max-sm:py-1 px-4 dark:text-[#4B6BFB] font-bold capitalize text-xl'>technology</button>
                    <p className='font-bold text-2xl max-sm:text-2xl md:text-2xl lg:leading-tight'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                    <div className="avatar  flex gap-5 text-[#97989F]">
                        <img src={avatarImg} className='w-1/12' alt="Avatar" />
                        <p>Jason Francisco</p>
                        <p>August 20, 2022</p>
                    </div>
                </div>
                

                


               


            </div>

        </div>
    )
}

export default LatestPosts