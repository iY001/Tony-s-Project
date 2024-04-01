import React, { useState } from "react";
import avatarImg from "./heroAsets/avatarCard.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Cardhero = () => {
  const settings = {
    infinite: true,
    speed: 1100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    arrows: false,
  };
  return (
    <div className="w-full ">
      <div className="w-full h-full">
        <Slider {...settings}>
          <div>
            <div className="card bg-gray-200 rounded-md flex flex-col p-3 min-w-[300px] max-w-[500px] mx-4 sm:mx-auto md:text-2xl    gap-2  my-2 justify-between">
              <button className="text-center text-white font-medium rounded-md bg-[#4B6BFB] w-2/6 p-0">
                physics
              </button>
              <h3 className="capitalize  font-bold leading-relaxed xl:text-2xl">
                thanks mr tony about magnetic flux blog. it's very useful. lore
              </h3>

              <div className="avatar flex justify-around mx-auto w-4/5 xl:text-lg">
                <img src={avatarImg} alt="Avatar" />
                <p>Jason Francisco</p>
                <p>August 20, 2022</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card bg-gray-200 rounded-md flex flex-col p-3 min-w-[300px] max-w-[500px] mx-4 sm:mx-auto md:text-2xl    gap-2  my-2 justify-between">
              <button className="text-center text-white font-medium rounded-md bg-[#4B6BFB] w-2/6 p-0">
                physics
              </button>
              <h3 className="capitalize  font-bold leading-relaxed xl:text-2xl">
                thanks mr tony about magnetic flux blog. it's very useful. lore
              </h3>

              <div className="avatar flex justify-around mx-auto w-4/5 xl:text-lg">
                <img src={avatarImg} alt="Avatar" />
                <p>Jason Francisco</p>
                <p>August 20, 2022</p>
              </div>
            </div>
          </div>
        
        </Slider>
      </div>
    </div>
  );
};

export default Cardhero;
