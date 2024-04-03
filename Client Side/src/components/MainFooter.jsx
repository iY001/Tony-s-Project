import React from 'react'

function MainFooter() {
    return (
        <div className=" bg-gray-900">
            <div className="max-w-2xl mx-auto text-white py-10">
                <div className="text-center">
                    <h3 className="font-bold mb-3 uppercase text-4xl footertext"> Physics Master </h3>
                    <p className='uppercase text-3xl'>Antonios Samy</p>
                </div>
                <div className="mt-16 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                    <p className="order-2 md:order-1 mt-8 md:mt-0"> © ZORPLEX, BEST DEVELOPERS. </p>
                    <div className="order-1 md:order-2  ">
                        <a href='#home' className="px-2 ">Home</a>
                        <a href='#about' className="px-2 mr-2 border-l">About us</a>
                        <a href='#contact' className="px-2 mr-2 border-l">Contact us</a>
                        <a href='#contact' className="px-2 mr-2 border-l">Blogs</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MainFooter