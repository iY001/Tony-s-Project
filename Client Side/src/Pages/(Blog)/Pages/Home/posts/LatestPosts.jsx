import React, { useState } from 'react';
import avatarImg from '../Hero/heroAsets/avatarCard.png';
import imgPost from '../Hero/heroAsets/heroImgPlastine.jpg'

const LatestPosts = () => {

    return (
        <> <h2 className='text-3xl  font-bold'>Latest Post</h2>
            <div className='container flex items-center justify-center min-h-screen mx-auto'>
                {/* grid system */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 ">


                    {/* card  */}
                    <div className="card my-10 mx-2  dark:bg-white border-solid border-gray-100 border-2  rounded-xl p-5 shadow-lg  ">
                        <div className="flex flex-col gap-7">
                            <img src={imgPost} className='cursor-pointer rounded-xl overflow-hidden' alt="" />
                            <button className='dark:bg-[#4B6BFB] dark:bg-opacity-5 rounded-md w-1/2  max-sm:py-1 px-4 dark:text-[#4B6BFB] font-bold capitalize text-xl'>technology</button>
                            <p className='font-bold text-2xl max-sm:text-2xl md:text-2xl lg:leading-tight'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                            <div className="avatar  flex gap-5 text-[#97989F]">
                                <img src={avatarImg} className='w-1/12 cursor-pointer' alt="Avatar" />
                                <p>Jason Francisco</p>
                                <p>August 20, 2022</p>
                            </div>
                        </div>
                    </div>


                    {/* card  */}
                    <div className="card my-10 mx-2  dark:bg-white border-solid border-gray-100 border-2  rounded-xl p-5 shadow-lg  ">
                        <div className="flex flex-col gap-7">
                            <img src={imgPost} className='cursor-pointer rounded-xl overflow-hidden' alt="" />
                            <button className='dark:bg-[#4B6BFB] dark:bg-opacity-5 rounded-md w-1/2  max-sm:py-1 px-4 dark:text-[#4B6BFB] font-bold capitalize text-xl'>technology</button>
                            <p className='font-bold text-2xl max-sm:text-2xl md:text-2xl lg:leading-tight'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                            <div className="avatar  flex gap-5 text-[#97989F]">
                                <img src={avatarImg} className='w-1/12 cursor-pointer' alt="Avatar" />
                                <p>Jason Francisco</p>
                                <p>August 20, 2022</p>
                            </div>
                        </div>
                    </div>


                    {/* card  */}
                    <div className="card my-10 mx-2  dark:bg-white border-solid border-gray-100 border-2  rounded-xl p-5 shadow-lg  ">
                        <div className="flex flex-col gap-7">
                            <img src={imgPost} className='cursor-pointer rounded-xl overflow-hidden' alt="" />
                            <button className='dark:bg-[#4B6BFB] dark:bg-opacity-5 rounded-md w-1/2  max-sm:py-1 px-4 dark:text-[#4B6BFB] font-bold capitalize text-xl'>technology</button>
                            <p className='font-bold text-2xl max-sm:text-2xl md:text-2xl lg:leading-tight'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                            <div className="avatar  flex gap-5 text-[#97989F]">
                                <img src={avatarImg} className='w-1/12 cursor-pointer' alt="Avatar" />
                                <p>Jason Francisco</p>
                                <p>August 20, 2022</p>
                            </div>
                        </div>
                    </div>


                    {/* card  */}
                    <div className="card my-10 mx-2  dark:bg-white border-solid border-gray-100 border-2  rounded-xl p-5 shadow-lg  ">
                        <div className="flex flex-col gap-7">
                            <img src={imgPost} className='cursor-pointer rounded-xl overflow-hidden' alt="" />
                            <button className='dark:bg-[#4B6BFB] dark:bg-opacity-5 rounded-md w-1/2  max-sm:py-1 px-4 dark:text-[#4B6BFB] font-bold capitalize text-xl'>technology</button>
                            <p className='font-bold text-2xl max-sm:text-2xl md:text-2xl lg:leading-tight'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                            <div className="avatar  flex gap-5 text-[#97989F]">
                                <img src={avatarImg} className='w-1/12 cursor-pointer' alt="Avatar" />
                                <p>Jason Francisco</p>
                                <p>August 20, 2022</p>
                            </div>
                        </div>
                    </div>


                    {/* card  */}
                    <div className="card my-10 mx-2  dark:bg-white border-solid border-gray-100 border-2  rounded-xl p-5 shadow-lg  ">
                        <div className="flex flex-col gap-7">
                            <img src={imgPost} className='cursor-pointer rounded-xl overflow-hidden' alt="" />
                            <button className='dark:bg-[#4B6BFB] dark:bg-opacity-5 rounded-md w-1/2  max-sm:py-1 px-4 dark:text-[#4B6BFB] font-bold capitalize text-xl'>technology</button>
                            <p className='font-bold text-2xl max-sm:text-2xl md:text-2xl lg:leading-tight'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                            <div className="avatar  flex gap-5 text-[#97989F]">
                                <img src={avatarImg} className='w-1/12 cursor-pointer' alt="Avatar" />
                                <p>Jason Francisco</p>
                                <p>August 20, 2022</p>
                            </div>
                        </div>
                    </div>


                    {/* card  */}
                    <div className="card my-10 mx-2  dark:bg-white border-solid border-gray-100 border-2  rounded-xl p-5 shadow-lg  ">
                        <div className="flex flex-col gap-7">
                            <img src={imgPost} className='cursor-pointer rounded-xl overflow-hidden' alt="" />
                            <button className='dark:bg-[#4B6BFB] dark:bg-opacity-5 rounded-md w-1/2  max-sm:py-1 px-4 dark:text-[#4B6BFB] font-bold capitalize text-xl'>technology</button>
                            <p className='font-bold text-2xl max-sm:text-2xl md:text-2xl lg:leading-tight'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                            <div className="avatar  flex gap-5 text-[#97989F]">
                                <img src={avatarImg} className='w-1/12 cursor-pointer' alt="Avatar" />
                                <p>Jason Francisco</p>
                                <p>August 20, 2022</p>
                            </div>
                        </div>
                    </div>


                    {/* card  */}
                    <div className="card my-10 mx-2  dark:bg-white border-solid border-gray-100 border-2  rounded-xl p-5 shadow-lg  ">
                        <div className="flex flex-col gap-7">
                            <img src={imgPost} className='cursor-pointer rounded-xl overflow-hidden' alt="" />
                            <button className='dark:bg-[#4B6BFB] dark:bg-opacity-5 rounded-md w-1/2  max-sm:py-1 px-4 dark:text-[#4B6BFB] font-bold capitalize text-xl'>technology</button>
                            <p className='font-bold text-2xl max-sm:text-2xl md:text-2xl lg:leading-tight'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                            <div className="avatar  flex gap-5 text-[#97989F]">
                                <img src={avatarImg} className='w-1/12 cursor-pointer' alt="Avatar" />
                                <p>Jason Francisco</p>
                                <p>August 20, 2022</p>
                            </div>
                        </div>
                    </div>


                    {/* card  */}
                    <div className="card my-10 mx-2  dark:bg-white border-solid border-gray-100 border-2  rounded-xl p-5 shadow-lg  ">
                        <div className="flex flex-col gap-7">
                            <img src={imgPost} className='cursor-pointer rounded-xl overflow-hidden' alt="" />
                            <button className='dark:bg-[#4B6BFB] dark:bg-opacity-5 rounded-md w-1/2  max-sm:py-1 px-4 dark:text-[#4B6BFB] font-bold capitalize text-xl'>technology</button>
                            <p className='font-bold text-2xl max-sm:text-2xl md:text-2xl lg:leading-tight'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                            <div className="avatar  flex gap-5 text-[#97989F]">
                                <img src={avatarImg} className='w-1/12 cursor-pointer' alt="Avatar" />
                                <p>Jason Francisco</p>
                                <p>August 20, 2022</p>
                            </div>
                        </div>
                    </div>


                    {/* card  */}
                    <div className="card my-10 mx-2  dark:bg-white border-solid border-gray-100 border-2  rounded-xl p-5 shadow-lg  ">
                        <div className="flex flex-col gap-7">
                            <img src={imgPost} className='cursor-pointer rounded-xl overflow-hidden' alt="" />
                            <button className='dark:bg-[#4B6BFB] dark:bg-opacity-5 rounded-md w-1/2  max-sm:py-1 px-4 dark:text-[#4B6BFB] font-bold capitalize text-xl'>technology</button>
                            <p className='font-bold text-2xl max-sm:text-2xl md:text-2xl lg:leading-tight'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                            <div className="avatar  flex gap-5 text-[#97989F]">
                                <img src={avatarImg} className='w-1/12 cursor-pointer' alt="Avatar" />
                                <p>Jason Francisco</p>
                                <p>August 20, 2022</p>
                            </div>
                        </div>
                    </div>


                    {/* card  */}
                    <div className="card my-10 mx-2  dark:bg-white border-solid border-gray-100 border-2  rounded-xl p-5 shadow-lg  ">
                        <div className="flex flex-col gap-7">
                            <img src={imgPost} className='cursor-pointer rounded-xl overflow-hidden' alt="" />
                            <button className='dark:bg-[#4B6BFB] dark:bg-opacity-5 rounded-md w-1/2  max-sm:py-1 px-4 dark:text-[#4B6BFB] font-bold capitalize text-xl'>technology</button>
                            <p className='font-bold text-2xl max-sm:text-2xl md:text-2xl lg:leading-tight'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                            <div className="avatar  flex gap-5 text-[#97989F]">
                                <img src={avatarImg} className='w-1/12 cursor-pointer' alt="Avatar" />
                                <p>Jason Francisco</p>
                                <p>August 20, 2022</p>
                            </div>
                        </div>
                    </div>


                    {/* card  */}
                    <div className="card my-10 mx-2  dark:bg-white border-solid border-gray-100 border-2  rounded-xl p-5 shadow-lg  ">
                        <div className="flex flex-col gap-7">
                            <img src={imgPost} className='cursor-pointer rounded-xl overflow-hidden' alt="" />
                            <button className='dark:bg-[#4B6BFB] dark:bg-opacity-5 rounded-md w-1/2  max-sm:py-1 px-4 dark:text-[#4B6BFB] font-bold capitalize text-xl'>technology</button>
                            <p className='font-bold text-2xl max-sm:text-2xl md:text-2xl lg:leading-tight'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                            <div className="avatar  flex gap-5 text-[#97989F]">
                                <img src={avatarImg} className='w-1/12 cursor-pointer' alt="Avatar" />
                                <p>Jason Francisco</p>
                                <p>August 20, 2022</p>
                            </div>
                        </div>
                    </div>


                  
                    {/* card  */}
                    <div className="card my-10 mx-2  dark:bg-white border-solid border-gray-100 border-2  rounded-xl p-5 shadow-lg  ">
                        <div className="flex flex-col gap-7">
                            <img src={imgPost} className='cursor-pointer rounded-xl overflow-hidden' alt="" />
                            <button className='dark:bg-[#4B6BFB] dark:bg-opacity-5 rounded-md w-1/2  max-sm:py-1 px-4 dark:text-[#4B6BFB] font-bold capitalize text-xl'>technology</button>
                            <p className='font-bold text-2xl max-sm:text-2xl md:text-2xl lg:leading-tight'>The Impact of Technology on the Workplace: How Technology is Changing</p>
                            <div className="avatar  flex gap-5 text-[#97989F]">
                                <img src={avatarImg} className='w-1/12 cursor-pointer' alt="Avatar" />
                                <p>Jason Francisco</p>
                                <p>August 20, 2022</p>
                            </div>
                        </div>
                    </div>


                  



                </div>
            </div>
        </>

    )
}

export default LatestPosts