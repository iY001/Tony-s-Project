import React from 'react'
import tony from '../assets/tony.png'
function Intro() {
    return (
        <div className="container flex-col-reverse lg:flex-row justify-center items-center w-full lg:w-[80%] h-auto mx-auto text-lg flex relative">
            <div data-aos="fade-right" data-aos-duration={1000} className="w-full px-5 lg:px-0 lg:w-1/2 h-full items-center flex mb-5 justify-center lg:items-start flex-col">
                <p>Hala!I'm</p>
                <h1 className="text-4xl font-medium font-sans uppercase" style={{ color: '#FD5956' }}>Tony</h1>
                <h1 className="text-center  text-black text-7xl lg:text-start font-medium font-sans uppercase mb-4">Physics<br /><span className="lg:ml-10">Master</span><span className style={{ color: '#FD5956' }}>.</span></h1>
                <button className="hover:bg-[#f57573] bg-black uppercase w-full text-white duration-700 px-7 lg:w-1/4 py-2 mt-5">
                    M.Tony
                </button>
            </div>
            <div data-aos="fade-left" data-aos-duration={1000} className="mb-5 mt-5 lg:mt-0 lg:mb-0 rounded-full overflow-hidden blob z-20 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[420px] lg:h-[420px] xl:w-[500px] xl:h-[500px] px-5 overflow flex justify-center items-center mx-auto relative border border-gray-400 border-dashed">
                <div className="rounded-full w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[320px] lg:h-[320px] xl:w-[400px] xl:h-[400px] border border-gray-400 border-dashed absolute" />
                <div className="rounded-full w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] md:w-[250px] md:h-[250px] lg:w-[220px] lg:h-[220px] xl:w-[300px] xl:h-[300px] bg-gradient-to-r from-35% from-indigo-400 to-fuchsia-600 absolute" />
                <img src={tony} className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] z-10 md:h-[400px] mr-7 lg:h-[450px] mt-12" alt="!#" />
            </div>
        </div>

    )
}

export default Intro