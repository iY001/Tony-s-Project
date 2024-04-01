import React from 'react'
import tony from '../assets/tony.png'
function Intro() {
    return (
        <div className="container flex-col-reverse lg:flex-row justify-center items-center w-full lg:w-[80%] h-auto mx-auto text-lg flex relative">
            <div data-aos="fade-right" data-aos-duration={1000} className="w-full px-5 lg:px-0 lg:w-1/2 h-full items-center flex mb-5 justify-center lg:items-start flex-col">
                <p>Hala!I'm</p>
                <h1 className="text-4xl font-medium font-sans uppercase" style={{ color: '#FD5956' }}>Tony</h1>
                <h1 className="text-center  text-black text-7xl lg:text-start font-medium font-sans uppercase mb-4">Physics<br /><span className="lg:ml-10">Master</span><span className style={{ color: '#FD5956' }}>.</span></h1>

                <div className="w-full flex justify-center lg:justify-start items-center mt-5">
                    <a href="https://www.facebook.com/toto.samy1" target='_blank' className="mr-6"><svg className="w-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                    </svg></a>
                    <a href className="mr-6"><svg className="w-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg></a>
                    <a href className="mr-6"><svg className="w-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                    </svg></a>
                    <a href className><svg className="w-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg></a>
                </div>
                <button className="hover:bg-[#f57573] bg-black uppercase w-full text-white duration-700 px-7 lg:w-1/4 py-2 mt-5">
                    M.Tony
                </button>
            </div>
            <div data-aos="fade-left" data-aos-duration={1000} className="mb-5 mt-1 lg:mb-0 rounded-full overflow-hidden blob z-20 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[420px] lg:h-[420px] xl:w-[500px] xl:h-[500px] px-5 overflow flex justify-center items-center mx-auto relative border border-gray-400">
                <div className="rounded-full w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[320px] lg:h-[320px] xl:w-[400px] xl:h-[400px] border border-gray-400 absolute" />
                <div className="rounded-full w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] md:w-[250px] md:h-[250px] lg:w-[220px] lg:h-[220px] xl:w-[300px] xl:h-[300px] bg-gradient-to-r from-35% from-indigo-400 to-fuchsia-600 absolute" />
                <img src={tony} className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] z-10 md:h-[400px] mr-7 lg:h-[450px] mt-12" alt="!#" />
            </div>
        </div>

    )
}

export default Intro